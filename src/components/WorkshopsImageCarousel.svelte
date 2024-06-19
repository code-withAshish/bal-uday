<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";
</script>

<Splide
  hasTrack={false}
  aria-label="My Favorite Images"
  options={{
    autoplay: true,
    interval: 2000,
    type: "loop",
    perPage: 3,
    focus: "center",
    breakpoints: {
      1200: {
        perPage: 3, // Large tablets or small laptops
      },
      1024: {
        perPage: 2, // Tablets
      },
      768: {
        perPage: 1, // Mobile devices
      },
    },
  }}
>
  <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev">{"<"}</button>
    <button class="splide__arrow splide__arrow--next">{">"}</button>
  </div>
  <SplideTrack>
    <SplideSlide>
      <div class="flex items-center justify-center flex-col">
        <img src={"/Carousel1.png"} alt="an hero" />
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex items-center justify-center flex-col">
        <img src={"/Carousel2.png"} alt="an hero" />
      </div>
    </SplideSlide>

    <SplideSlide>
      <div class="flex items-center justify-center flex-col">
        <img src={"/Carousel3.png"} alt="an hero" />
      </div>
    </SplideSlide>
  </SplideTrack>
</Splide>

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
