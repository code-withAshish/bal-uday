<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  import Workshop1 from "../assets/Workshop1.jpg";
  import Workshop2 from "../assets/Workshop2.jpg";
  import Workshop3 from "../assets/Workshop3.jpg";
  import Workshop4 from "../assets/Workshop4.jpg";
  import Workshop5 from "../assets/Workshop5.jpg";
  import Workshop6 from "../assets/Workshop6.jpg";

  const images = [
    Workshop1,
    Workshop2,
    Workshop3,
    Workshop4,
    Workshop5,
    Workshop6,
  ];
</script>

<Splide
  hasTrack={false}
  aria-label="Workshop Images"
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
    <slot name="image"/>
    {#each images as image}
      <SplideSlide>
        <div class="flex items-center justify-center flex-col p-4">
          <img src={image.src} alt={"Workshop"} />
        </div>
      </SplideSlide>
    {/each}
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
    opacity: 1;
  }

  .splide__arrow--prev:hover,
  .splide__arrow--next:hover {
    opacity: 1;
  }
</style>
