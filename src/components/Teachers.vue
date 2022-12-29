<template>
  <h1 class="w-25 fw-light  ms-5 py-3 color">Teachers</h1>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3 v-col-md-3 mt-3" v-for="info in infos" :key="info.id">
        <div class="box  d-flex justify-content-center">
          <img :src="info.image" alt="" @click="openModal(info.id)">
        </div>
      </div>


      <Transition :duration="550" name="nested">
        <div class=" jaxon" v-show="show">
          <div class="modal-content1 rounded-6">
            <i class="fas fa-times close1 fs-3 text-light"  @click="show = false"></i> 
            <h1 ref='heading' class=" text-light h11"></h1>
            <p ref='demo' class="demo"></p>
          </div>
        </div>

      </Transition>

    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      dialog: false,
      show: false,
      infos: [
        {
          id: 1,
          name: 'Begesame',
          title: 'Senyor dasturchi 5 yilik tajriba  yuqori natijalarga erishgan jamo etakchisi',
          image: new URL('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png', import.meta.url).href
        },

        {
          id: 2,
          name: 'Jaxon',
          title: 'fdsfdsfsdfdsfdssss',
          image: new URL('../assets/pexels-italo-melo-2379004 (1).png', import.meta.url).href
        },

        {
          id: 3,
          name: 'nimdafdsa',
          title: 'fdsfdsfsdfdsfdsaaa',
          image: new URL('../assets/pexels-italo-melo-2379004 (2).png', import.meta.url).href
        },
        {
          id: 4,
          name: 'nimdafdsa',
          title: 'fdsfdsfsdfdsfdswsedasedas',
          image: new URL('../assets/pexels-italo-melo-2379004 (2).png', import.meta.url).href
        },
        {
          id: 5,
          name: 'nimdafdsa',
          title: 'fdsfdsfsdfdsfdswwwww',
          image: new URL('../assets/pexels-italo-melo-2379004 (2).png', import.meta.url).href
        },
      ],
    };

  },

  methods: {
    openModal(id) {


      this.infos.forEach((el) => {
        if (el.id == id) {
          this.show = !this.show
          this.$refs.heading.innerHTML = el.name
          this.$refs.demo.innerHTML = el.title
        }
      })
    }
  },


};
</script>
<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}


.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}


.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.2s linear;
}

.nested-enter-active .inner {
  transition-delay: 0.2s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}

.demo {
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.h11 {
  font-family: sans-serif;
  font-weight: bolder;
}

.close1:hover {
  color: rgb(126, 124, 124) !important;
  cursor: pointer;
}

.close1:focus {
  color: rgb(105, 104, 104);
  text-decoration: none;
}
.close1{
  transition: .2s;
}

.jaxon {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.306);
  background-color: rgba(10, 10, 10, 0.4);
}

@media screen and (max-width: 800px) {}

.modal-content1 {
  background-color: linear-gradient(135deg, rgb(255, 255, 255, 0.1) rgb(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px rgb(255, 255, 255, 0.18);
  margin: auto;
  margin-top: 60px;
  padding: 30px;
  border: 1px solid #888;
  width: 70%;
}

.color {
  background: rgb(93, 191, 156);
  background: linear-gradient(13deg, rgba(93, 191, 156, 1) 0%, rgba(53, 73, 94, 1) 56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 3px double rgb(93, 191, 156)
}

.box {
  transition: 0.5s;
}

.box img {
  border-radius: 46% 54% 48% 52% / 30% 30% 70% 70%;
}

.box:hover {
  transform: perspective(50rem) translateZ(50px);
}
</style>
