<script>
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</script>

<Splide
  aria-label="My Favorite Images"
  options={{perPage:3,rewind:true}}
>

  <SplideSlide>
    <img src={"/Carousel1.png"} alt="an hero" />
  </SplideSlide>
  <SplideSlide>
    <img src={"/Carousel2.png"} alt="an hero" />
  </SplideSlide>
  <SplideSlide>
    <img src={"/Carousel3.png"} alt="an hero" />
  </SplideSlide>
</Splide>

