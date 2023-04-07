<template>
  <div class="container-fluid " style="margin-top: 100px ">
    <Carousel ref="carousel" v-model="currentSlide" :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="image in images" :key="image.id">
      <div class="carousel__item">
      <img :src="image.links" alt=" " class="img-fluid">
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>


  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import "../../node_modules/vue3-carousel/dist/carousel.css";
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      currentSlide: 0,
      images: [
        {
          id: 1,
          links: new URL("../assets/3Dmax.jpeg", import.meta.url).href
        },
        {
          id: 2,
          links: new URL("../assets/SVGdk.png", import.meta.url).href
        },
      ],
    };
  },


});
</script>

<style scoped>
.carousel__item {
  min-height: 200px;
  width: 100%;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
