<template>
  <h1 class="w-25 fw-light  ms-5 py-3 color">Kurs Mentorlari</h1>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3 v-col-md-3 mt-3" v-for="info in infos" :key="info.id">
        <div class="box  d-flex justify-content-center" data-aos="zoom-out-up">
          <img :src="info.image" alt="" @click="openModal(info.id)" class="img-fluid w-75">
        
        </div>
       
      
      </div>
      <div class="jaxon" v-if='show'>
      </div>
      <div class="modal-content1  rounded-6" v-show='modal' v-on-click-outside="closeModal">
        <h1 class="text-light h11" id="modal"></h1>
        <p class="demo"></p>
      <p><i class="fas fa-phone-alt text-success"></i>  <span id="tel" class="text-white"></span> </p>
      </div>
      
      
        




    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '../store/store.js'
import { vOnClickOutside } from '@vueuse/components'

const modal = ref(false)
function closeModal() {
  modal.value = false
  show.value = false
}

const store = useStore()
let show = ref(false)

let dialog = ref(false)
let infos = ref([
  {
    id: 1,
    name: 'Shakhzod Toshboyev',
    title: '4 yil ish tajribasiga ega middle Mobile software developer',
    image: new URL('../assets/xodim/shakhzod.jpg', import.meta.url).href,
    tel:'+998 99 670 03 25'
  },

  {
    id: 2,
    name: 'Jaxon',
    title: 'fdsfdsfsdfdsfdssss',
    image: new URL('../assets/xodim/shakhzod.jpg', import.meta.url).href,
    tel:'+998 99 670 03 25'
  },

  {
    id: 3,
    name: 'nimdafdsa',
    title: 'fdsfdsfsdfdsfdsaaa',
    image: new URL('../assets/xodim/shakhzod.jpg', import.meta.url).href,
    tel:'+998 99 670 03 25'
  },
  {
    id: 4,
    name: 'nimdafdsa',
    title: 'fdsfdsfsdfdsfdswsedasedas',
    image: new URL('../assets/xodim/shakhzod.jpg', import.meta.url).href,
    tel:'+998 99 670 03 25'
  },
  {
    id: 5,
    name: 'nimdafdsa',
    title: 'fdsfdsfsdfdsfdswwwww',
    image: new URL('../assets/xodim/shakhzod.jpg', import.meta.url).href,
    tel:'+998 99 670 03 25'
  },
])

let openModal = (id, event) => {
  modal.value = true
  let modal1 = document.querySelector(".h11");
let demo = document.querySelector(".demo");
let tel = document.querySelector("#tel");

  console.log(modal1);
  infos.value.forEach((el) => {
    console.log(modal1);
    if (el.id == id) {
      modal1.innerHTML = el.name;
      demo.innerHTML = el.title;
      tel.innerHTML = el.tel;
      show.value = !show.value

    }
  })




}


</script>
<style scoped>
.demo {
  color: #fff;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.h11 {
  font-family: sans-serif;
  font-weight: bolder;
}

.jaxon {
  position: fixed;
  padding-top: 100px;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.306);
  background-color: rgba(10, 10, 10, 0.4);
}

@media screen and (max-width: 800px) {}

.modal-content1 {
  background-color: linear-gradient(135deg, rgb(255, 255, 255, 0.1) rgb(255, 255, 255, 0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px rgb(255, 255, 255, 0.18);
  margin-left: -10px;
  padding: 80px;
  border: 1px solid #888;
  width: 70%;
  position: fixed;
  top: 230px;
  z-index: 333;
 
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
