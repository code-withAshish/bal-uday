<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";
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
          <img src={"/Carousel1.png"} alt="an hero" />
          <p class="basis-1/3 text-xs md:text-sm">
            Gayatri Misra is an advocate with six years of experience in Civil
            Litigation and Child Rights. She is currently serving as an
            empanelled advocate in the Supreme Court of India for the Union of
            India. Gayatri has done her masters, as a scholarship student, from
            the Pennsylvania State University. While her time in Pennsylvania,
            she worked with Lion Line in association with THON, an initiative
            for raising funds for children and families impacted by childhood
            cancer. She Started her Practice in the Delhi High Court as an
            Advocate Associate in Mulla and Mulla Craigie Blunt and Caroe. She
            subsequently worked with the Bachpan Bacho Andolan before starting
            her independent practice. Gayatri has also worked on matters in
            Africa relating to Child and Women rights during her time as a
            student. She continues to work towards her passion of Child and
            Women rights, working Probono on matters for those in need.
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div
          class="flex items-center justify-center flex-col md:flex-row gap-10 p-4"
        >
          <img src={"/Carousel1.png"} alt="an hero" />
          <p class="basis-1/3 text-xs md:text-sm">
            Gayatri Misra is an advocate with six years of experience in Civil
            Litigation and Child Rights. She is currently serving as an
            empanelled advocate in the Supreme Court of India for the Union of
            India. Gayatri has done her masters, as a scholarship student, from
            the Pennsylvania State University. While her time in Pennsylvania,
            she worked with Lion Line in association with THON, an initiative
            for raising funds for children and families impacted by childhood
            cancer. She Started her Practice in the Delhi High Court as an
            Advocate Associate in Mulla and Mulla Craigie Blunt and Caroe. She
            subsequently worked with the Bachpan Bacho Andolan before starting
            her independent practice. Gayatri has also worked on matters in
            Africa relating to Child and Women rights during her time as a
            student. She continues to work towards her passion of Child and
            Women rights, working Probono on matters for those in need.
          </p>
        </div>
      </SplideSlide>

      <SplideSlide>
        <div
          class="flex items-center justify-center flex-col md:flex-row gap-10 p-4"
        >
          <img src={"/Carousel1.png"} alt="an hero" />
          <p class="basis-1/3 text-xs md:text-sm">
            Gayatri Misra is an advocate with six years of experience in Civil
            Litigation and Child Rights. She is currently serving as an
            empanelled advocate in the Supreme Court of India for the Union of
            India. Gayatri has done her masters, as a scholarship student, from
            the Pennsylvania State University. While her time in Pennsylvania,
            she worked with Lion Line in association with THON, an initiative
            for raising funds for children and families impacted by childhood
            cancer. She Started her Practice in the Delhi High Court as an
            Advocate Associate in Mulla and Mulla Craigie Blunt and Caroe. She
            subsequently worked with the Bachpan Bacho Andolan before starting
            her independent practice. Gayatri has also worked on matters in
            Africa relating to Child and Women rights during her time as a
            student. She continues to work towards her passion of Child and
            Women rights, working Probono on matters for those in need.
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
  }
</style>
