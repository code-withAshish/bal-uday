<script>
  import { Splide, SplideSlide, SplideTrack } from "@splidejs/svelte-splide";
  import "@splidejs/splide/dist/css/themes/splide-default.min.css";

  import Workshop1 from "../assets/workshop/Workshop1.jpg";
  import Workshop2 from "../assets/workshop/Workshop2.jpg";
  import Workshop3 from "../assets/workshop/Workshop3.jpg";
  import Workshop4 from "../assets/workshop/Workshop4.jpg";
  import Workshop5 from "../assets/workshop/Workshop5.jpg";
  import Workshop6 from "../assets/workshop/Workshop6.jpg";
import Workshop7 from "../assets/workshop/Workshop7.jpg";
import Workshop8 from "../assets/workshop/Workshop8.jpg";
import Workshop9 from "../assets/workshop/Workshop9.jpg";
import Workshop10 from "../assets/workshop/Workshop10.jpg";
import Workshop11 from "../assets/workshop/Workshop11.jpg";
import Workshop12 from "../assets/workshop/Workshop12.jpg";
import Workshop13 from "../assets/workshop/Workshop13.jpg";

  const images = [
    Workshop1,
    Workshop2,
    Workshop3,
    Workshop4,
    Workshop5,
    Workshop6,
    Workshop7,
    Workshop8,
    Workshop9,
    Workshop10,
    Workshop11,
    Workshop12,
    Workshop13,
  ].sort(() => Math.random() - 0.5);
</script>

<Splide
  hasTrack={false}
  aria-label="Workshop Images"
  options={{
    autoplay: true,
    interval: 1200,
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
