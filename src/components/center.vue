<template>
  <div class="container">
    <Carousel :items-to-show="2.5" :wrap-around="true" :autoplay="2000">
      <Slide v-for="slide in images" :key="slide">
        <div class="carousel__item">
          <img :src="slide.link" alt="" class="img-fluid" />
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
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "../../node_modules/vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      images: [
        {
          id: 1,
          link: "https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img_medium/5552/5368/37585/photo-8-springhill-townhouse-desain-arsitek-oleh-img-architects.jpeg",
        },
        {
          id: 2,
          link: "https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img_medium/5552/5368/37585/photo-8-springhill-townhouse-desain-arsitek-oleh-img-architects.jpeg",
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
  background-color: var(--vc-clr-primary);
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
