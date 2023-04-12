<template>
  <div style="margin-top: 100px">
    <Carousel
      :wrapAround="true"
      :transition="500"
      v-bind="settings"
      :breakpoints="breakpoints"
      :autoplay="2000"
    >
      <slide v-for="info in infos" :key="info.id">
        <img
          :src="info.link"
          alt=""
          class="img-fluid w-75 img-thumbnail"
          style="border-radius: 30px"
        />
      </slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "ExamplePagination",
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  data: () => ({
    infos: [
      {
        id: 1,
        link: new URL("../assets/vue.svg", import.meta.url),
      },

      {
        id: 2,
        link: new URL("../assets/flutter.png", import.meta.url),
      },

      {
        id: 3,
        link: new URL("../assets/c-sharp.png", import.meta.url),
      },

      {
        id: 4,
        link: new URL("../assets/figma.png", import.meta.url),
      },

      {
        id: 5,

        link: new URL("../assets/dotnet.png", import.meta.url),
      },
      {
        id: 6,
        link: new URL("../assets/3smax.png", import.meta.url),
      },
      {
        id: 7,
        link: new URL("../assets/java.png", import.meta.url),
      },
      {
        id: 8,
        link: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 3.25,
    },
    // breakpoints are mobile first

    breakpoints: {
      // 700px and up
      300: {
        itemsToShow: 1,
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
      },
    },
  }),
});
</script>

<style lang="scss" scoped>
.carousel__slide {
  padding: 15px;
  background: transparent !important;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.7);
  background: transparent !important;
  img {
    background: transparent !important;
  }
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.6);

  transition: 0.6s ease;
}

.carousel__slide--prev {
  background: transparent !important;
  opacity: 1;
  transform: rotateY(-10deg) scale(0.6);

  transition: 0.6s ease;
  img {
    transition: 0.6s ease;
    padding: 40px;
    border-radius: none !important;
    border-top-right-radius: 50px !important;
    border-bottom-left-radius: 50px !important;
    object-fit: cover;
    background: transparent !important;
  }
}

.carousel__slide--next {
  transform: rotateY(20deg) scale(0.6);
  transition: 0.6s ease;
  opacity: 1;

  background: transparent !important;
  img {
    padding: 40px;
    border-radius: none !important;
    border-top-right-radius: 50px !important;
    border-bottom-left-radius: 50px !important;
    object-fit: cover;
    background: transparent !important;
  }
}

.carousel__slide--active {
  background: transparent !important;
  opacity: 1;

  transition: 0.6s ease;

  img {
    transition: 0.6s ease;
    transform: scale(1.3);
    border: double 2px rgb(60, 224, 142);
    padding: 25px;
    background: transparent !important;
  }
}
</style>
