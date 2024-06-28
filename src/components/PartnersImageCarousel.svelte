<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";
  import GayatriImage from "../assets/Gayatri.png";
  import KunalImage from "../assets/Kunal.jpg";
  import ShubhiImage from "../assets/Shubhi.jpg";
  import AdvityaImage from "../assets/Advitya.jpg";

  export let language = "en";
</script>

<div class="flex justify-center">
  <Splide
    hasTrack={false}
    aria-label="My Favorite Images"
    options={{
      autoplay: true,
      interval: 2000,
      type: "loop",
      perPage: 1,
      width: "80vw",
      height: "auto",
    }}
  >
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">{"<"}</button>
      <button class="splide__arrow splide__arrow--next">{">"}</button>
    </div>
    <SplideTrack>
      <SplideSlide>
        <div
          class="flex items-center justify-center flex-col md:flex-row gap-10 p-4"
        >
          <div>
            <img
              src={GayatriImage.src}
              alt="Gayatri Mishra"
              height="200"
              width="200"
            />
            <p class="text-center text-[#C69C6D] font-[700] pt-2">
              {#if language === "en"}
                Gayatri Mishra
              {:else if language === "hi"}
                गायत्री मिश्रा
              {/if}
            </p>
            <p class="text-center text-xs">LLM</p>
          </div>
          <p class="basis-1/3 text-xs md:text-sm">
            {#if language === "en"}
              Gayatri Misra is an advocate with six years of experience in Civil
              Litigation and Child Rights. She is currently serving as an
              empanelled advocate in the Supreme Court of India for the Union of
              India. Gayatri has done her masters, as a scholarship student,
              from the Pennsylvania State University. While her time in
              Pennsylvania, she worked with Lion Line in association with THON,
              an initiative for raising funds for children and families impacted
              by childhood cancer. She Started her Practice in the Delhi High
              Court as an Advocate Associate in Mulla and Mulla Craigie Blunt
              and Caroe. She subsequently worked with the Bachpan Bacho Andolan
              before starting her independent practice. Gayatri has also worked
              on matters in Africa relating to Child and Women rights during her
              time as a student. She continues to work towards her passion of
              Child and Women rights, working Probono on matters for those in
              need.
            {:else if language === "hi"}
              गायत्री मिश्रा एक वकील हैं जिनके पास सिविल मुकदमेबाजी और बाल
              अधिकारों में छह वर्षों का अनुभव है। वर्तमान में वे भारत संघ के लिए
              भारत के सर्वोच्च न्यायालय में पैनल में शामिल वकील के रूप में सेवा
              दे रही हैं। गायत्री ने पेन्सिलवेनिया स्टेट यूनिवर्सिटी से
              छात्रवृत्ति छात्र के रूप में अपनी मास्टर्स की डिग्री प्राप्त की
              है। पेन्सिलवेनिया में अपने समय के दौरान, उन्होंने THON के साथ
              मिलकर Lion Line के साथ काम किया, जो बचपन के कैंसर से प्रभावित
              बच्चों और परिवारों के लिए धन जुटाने की एक पहल है। उन्होंने अपनी
              प्रैक्टिस की शुरुआत दिल्ली उच्च न्यायालय में मुल्ला और मुल्ला
              क्रेगी ब्लंट और कैरो में एडवोकेट एसोसिएट के रूप में की। इसके बाद
              उन्होंने बचपन बचाओ आंदोलन के साथ काम किया, उसके बाद अपनी स्वतंत्र
              प्रैक्टिस शुरू की। गायत्री ने अपने छात्र जीवन के दौरान अफ्रीका में
              बाल और महिला अधिकारों से संबंधित मामलों पर भी काम किया है। वे
              जरूरतमंद लोगों के लिए मामलों पर प्रोबोनो काम करते हुए बाल और महिला
              अधिकारों के प्रति अपने जुनून को जारी रखती हैं।
            {/if}
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          class="flex items-center justify-center flex-col md:flex-row gap-10 p-4"
        >
          <div>
            <img
              src={KunalImage.src}
              alt="Kunal Awana"
              height="200"
              width="200"
            />
            <p class="text-center text-[#C69C6D] font-[700] pt-2">
              {#if language === "en"}
                Kunal Awana
              {:else if language === "hi"}
                कुनाल अवाना
              {/if}
            </p>
            <p class="text-center text-xs">LLB</p>
          </div>
          <p class="basis-1/3 text-xs md:text-sm">
            {#if language === "en"}
              Kunal Awana is an advocate with six years of experience in
              Criminal and Civil Law. Kunal pursued his LLB degree from Amity
              University Noida. Kunal is a seasoned litigator with a passion for
              working in trail matters involving Child Rights. He is currently
              working as an independent lawyer and also representing his clients
              in matters related to the POCSO Act before Juvenile Justice Boards
              in Delhi. He has a client representation in Delhi High Court and
              Delhi District Courts. Kunal works in litigation while also
              pursing his passion in Child Rights.
            {:else if language === "hi"}
              कुनाल अवाना एक वकील हैं जिनके पास आपराधिक और सिविल कानून में छह
              वर्षों का अनुभव है। कुनाल ने एमिटी यूनिवर्सिटी नोएडा से अपनी
              एलएलबी की डिग्री प्राप्त की है। कुनाल एक अनुभवी मुकदमेबाज हैं
              जिन्हें बाल अधिकारों से संबंधित मामलों में काम करने का जुनून है।
              वर्तमान में वे एक स्वतंत्र वकील के रूप में काम कर रहे हैं और
              दिल्ली में किशोर न्याय बोर्डों के समक्ष POCSO अधिनियम से संबंधित
              मामलों में अपने ग्राहकों का प्रतिनिधित्व भी कर रहे हैं। उनका
              दिल्ली उच्च न्यायालय और दिल्ली जिला न्यायालयों में भी मुवक्किलों
              का प्रतिनिधित्व है। कुनाल मुकदमेबाजी में काम करते हुए बाल अधिकारों
              के प्रति अपने जुनून को भी पूरा करते हैं।
            {/if}
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          class="flex items-center justify-center flex-col md:flex-row gap-10 p-4"
        >
          <div>
            <img
              src={ShubhiImage.src}
              alt="Shubhi Mishra"
              height="200"
              width="200"
            />
            <p class="text-center text-[#C69C6D] font-[700] pt-2">
              {#if language === "en"}
                Shubhi Mishra
              {:else if language === "hi"}
                शुभी मिश्रा
              {/if}
            </p>
            <p class="text-center text-xs">LLM</p>
          </div>
          <p class="basis-1/3 text-xs md:text-sm">
            {#if language === "en"}
              Shubhi Mishra is an advocate with 3 years of experience in Civil
              and Corporate Litigation. She pursued her Graduation and Post
              Graduation from Barkatullah University, Bhopal. Throughout her
              education, she has taken small steps for educating under
              privileged children, from imparting knowledge around her locality
              via regular classes and sessions to working with NGOs like MIC on
              weekends. She has also researched upon conditions and working of
              Child Care Institute in Bhopal, interacting and understanding the
              impact on children living under care. Additionally, she has also
              been a part of research and contributed in a detailed study of
              "Amendments in Juvenile Justice Acts, its implications",
              eventually forming the baseto multiple RTIs filed through her
              previous office
            {:else if language === "hi"}
              शुभी मिश्रा एक वकील हैं जिनके पास सिविल और कॉर्पोरेट मुकदमेबाजी
              में 3 वर्षों का अनुभव है। उन्होंने अपनी स्नातक और स्नातकोत्तर की
              पढ़ाई बरकतुल्ला विश्वविद्यालय, भोपाल से की है। अपनी शिक्षा के
              दौरान, उन्होंने वंचित बच्चों को शिक्षित करने के लिए छोटे-छोटे कदम
              उठाए हैं, जिसमें अपने स्थानीय क्षेत्र में नियमित कक्षाओं और सत्रों
              के माध्यम से ज्ञान प्रदान करना और सप्ताहांत में MIC जैसे एनजीओ के
              साथ काम करना शामिल है। उन्होंने भोपाल में चाइल्ड केयर इंस्टीट्यूट
              की स्थितियों और कार्यप्रणाली पर भी शोध किया है, बच्चों के साथ
              बातचीत करके और उनकी देखभाल के अंतर्गत रहने वाले बच्चों पर पड़ने
              वाले प्रभाव को समझकर। इसके अतिरिक्त, उन्होंने "किशोर न्याय
              अधिनियमों में संशोधन, उसके प्रभाव" पर विस्तृत अध्ययन में भी भाग
              लिया और शोध में योगदान दिया है, जो अंततः उनके पिछले कार्यालय के
              माध्यम से दाखिल कई आरटीआई का आधार बना।
            {/if}
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          class="flex items-center justify-center flex-col md:flex-row gap-10 p-4"
        >
          <div>
            <img src={AdvityaImage.src} alt="Advitya Awasthi" height="200" width="200" />
            <p class="text-center text-[#C69C6D] font-[700] pt-2">
              {#if language === "en"}
                Advitya Awasthi
              {:else if language === "hi"}
                अद्वितीय अवस्थी
              {/if}
            </p>
            <p class="text-center text-xs">LLM</p>
          </div>
          <p class="basis-1/3 text-xs md:text-sm">
            {#if language === "en"}
              Advitiya Awasthi is a seasoned advocate, possesses 8 years of
              expertise in Civil and Criminal Litigation. He completed his
              Graduation from Rajiv Gandhi National University of Law in 2015.
              Throughout his career as an advocate, he has demonstrated a
              profound commitment to advancing Legal Studies and has
              participated as a Judge in numerous Moot Court Competitions across
              the nation. Currently, he is empaneled by the Union of India and
              passionately advocates for justice in both the Supreme Court and
              Delhi High Court.
            {:else if language === "hi"}
              अद्वितीय अवस्थी एक अनुभवी वकील हैं, जिनके पास सिविल और आपराधिक
              मुकदमेबाजी में 8 वर्षों का अनुभव है। उन्होंने 2015 में राजीव गांधी
              नेशनल यूनिवर्सिटी ऑफ लॉ से स्नातक की पढ़ाई पूरी की। एक वकील के रूप
              में अपने करियर के दौरान, उन्होंने कानूनी अध्ययन को आगे बढ़ाने के
              लिए गहरा समर्पण दिखाया है और देश भर में कई मूट कोर्ट प्रतियोगिताओं
              में न्यायाधीश के रूप में भाग लिया है। वर्तमान में, वे भारत संघ
              द्वारा पैनल में शामिल हैं और सुप्रीम कोर्ट और दिल्ली उच्च न्यायालय
              में न्याय के लिए जोशीले तरीके से वकालत करते हैं।
            {/if}
          </p>
        </div>
      </SplideSlide>
    </SplideTrack>
  </Splide>
</div>

<style>
  .splide__arrow--prev,
  .splide__arrow--next {
    background-color: #c69c6d;
    color: white;
    font-weight: 900;
    font-size: larger;
    text-align: center;
    border-radius: 50%;
    padding: 1.5rem;
    margin: 1rem;
    opacity: 1;
  }
  .splide__arrow--next:hover,
  .splide__arrow--prev:hover {
    opacity: 1;
  }
</style>
