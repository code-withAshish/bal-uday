import Busboy from "busboy";
import { google } from "googleapis";
import { Readable } from "stream";

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const DRIVE_FOLDER_ID = process.env.DRIVE_FOLDER_ID;
const GOOGLE_SERVICE_ACCOUNT_JSON = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

if (!SPREADSHEET_ID || !DRIVE_FOLDER_ID || !GOOGLE_SERVICE_ACCOUNT_JSON) {
  throw new Error(
    "SPREADSHEET_ID, DRIVE_FOLDER_ID, and GOOGLE_SERVICE_ACCOUNT_JSON must be set"
  );
}

// Parse JSON key from env
const credentials = JSON.parse(GOOGLE_SERVICE_ACCOUNT_JSON);

const googleAuth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/spreadsheets",
  ],
});

async function getAuth() {
  return await googleAuth.getClient();
}

function parseMultipartForm(event) {
  return new Promise((resolve, reject) => {
    if (!event.headers["content-type"]?.includes("multipart/form-data")) {
      return reject(new Error("Invalid content-type"));
    }

    const fields = {};
    const busboy = Busboy({ headers: event.headers });

    busboy.on("file", (fieldname, filestream, filename, encoding, mimeType) => {
      const fileBuffer = [];

      filestream.on("data", (data) => fileBuffer.push(data));
      filestream.on("end", () => {
        fields[fieldname] = {
          filename,
          type: mimeType,
          content: Buffer.concat(fileBuffer),
        };
      });
    });

    busboy.on("field", (fieldName, value) => {
      fields[fieldName] = value;
    });

    busboy.on("finish", () => resolve(fields));
    busboy.on("error", (err) => reject(err));

    const encoding = event.isBase64Encoded ? "base64" : "utf8";
    busboy.end(Buffer.from(event.body, encoding));
  });
}

async function uploadFileToDrive(auth, file, filename) {
  const drive = google.drive({ version: "v3", auth });

  const bufferStream = new Readable();
  bufferStream.push(file.content);
  bufferStream.push(null);

  const requestBody = {
    name: filename,
    parents: [DRIVE_FOLDER_ID],
  };

  const media = {
    mimeType: file.type,
    body: bufferStream,
  };

  const response = await drive.files.create({
    requestBody,
    media,
    fields: "id, webViewLink",
  });

  return response.data.webViewLink;
}

async function appendToSheet(auth, values) {
  const sheets = google.sheets({ version: "v4", auth });

  return sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [values],
    },
  });
}

export async function handler(event, context) {
  try {
    const fields = await parseMultipartForm(event);

    const authClient = await getAuth();

    let cvLink = "";
    if (fields.cv) {
      cvLink = await uploadFileToDrive(authClient, fields.cv, fields.name);
    }

    const row = [
      new Date().toISOString(),
      fields.name || "",
      fields.contact || "",
      fields.address || "",
      fields.qualification || "",
      fields.experience || "",
      fields.whyVolunteer || "",
      fields.awarenessExperience || "",
      `=HYPERLINK("${cvLink}", "View CV")`,
    ];

    await appendToSheet(authClient, row);

    return {
      statusCode: 302,
      headers: { Location: "/volunteer?submitted=true" },
    };
  } catch (err) {
    console.error("Error processing volunteer form:", err);
    return {
      statusCode: 302,
      headers: { Location: "/volunteer?error=true" },
    };
  }
}
