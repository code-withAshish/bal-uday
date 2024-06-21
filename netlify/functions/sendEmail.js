async function sendEmail(name, email, phone, message) {
  const url = new URL("https://control.msg91.com/api/v5/email/send");

  let headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    authkey: process.env.MSG91_API_KEY,
  };

  let body = {
    recipients: [
      {
        to: [
          {
            email: "prakratiaryaoffice@gmail.com",
            name: "Prakriti",
          },
        ],
        variables: {
          name,
          email,
          phone,
          message,
        },
      },
    ],
    from: {
      email: "contact@baluday.org",
    },
    domain: "baluday.org",
    template_id: "contact_us_response",
  };

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  });
  console.log(res.statusText,await res.json());
}

/**
 *
 * @param {Request} req
 * @returns {Response}
 */
export default async (req) => {
  const fd = await req.formData();

  // get all the values from the form
  const data = {
    name: fd.get("name"),
    email: fd.get("email"),
    tele: fd.get("tele"),
    message: fd.get("message"),
  };

  await sendEmail(data.name, data.email, data.tele, data.message);

  return Response.redirect(new URL("/", new URL(req.url).origin));
};
