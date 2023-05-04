<template>
  <h1 class="w-25 fw-light ms-5 py-3 mt-5 color">Kurs Mentorlari</h1>
  <div class="container">
  
    <div class="row mt-5 gap-5 justify-content-evenly">
      <div
        class="col-md-3 col-12 col-md-4 col-lg-3 parent mt-5"
        v-for="info of store.infos"
        :key="info.id"
      >
       

        <atropos class="my-atropos"   :active-offset="40"
      :shadow = 'false' :stretchZ = '6'>
          <div class="box d-flex justify-content-center" style="height: 500px">
          <img
            :src="info.icon"
            alt=""
            class="w-25 position-absolute rounded"
            style="left: 0px; top: 30px"
          />
          <div class="topInfo flex-column p-3">
            <p>
              {{ info.name }}
              
            </p>

            <button @click="openModal(info.id)" class="btn btn-success">
              About mentor
            </button>
          </div>
          <img
          data-atropos-offset="5"
            :src="info.image"
            alt=""
            @click="openModal(info.id)"
            class="img-fluid w-100 mt-5 position-absolute worker"
            :class="{
              roundedImage: info.id % 2 == 0 ? true : false,
              roundedImage2: info.id % 2 == 1 ? true : false,
            }"
            style="cursor: pointer; bottom: 0"
          />
        </div>
    </atropos>
    
      </div>
      <h2 class="text-dark text-center mt-5">"DK Academy" direktori</h2>
  
    <div class="w-100 d-flex justify-content-start ">
      <atropos class="my-atropos"   :active-offset="40"
      :shadow = 'false' :stretchZ = '6'>
    <img src="../assets/xodim/Direktor.jpg" alt="" class="border p-3  w-100 d-block m-auto rounded-7">
    <h2 class="text-center">Husniddin Uzoqov</h2>
  </atropos>
    </div>

    


      <div class="content" v-if="show"></div>
      <Transition>
        <div
          class="modal-content1 rounded-6"
          v-show="modal"
          v-on-click-outside="closeModal"
        >
          <h3
            class="text-light h11 bg-light text-dark d-inline-block px-4 py-2 rounded"
            id="modal"
          ></h3>
          <p class="demo"></p>
          <p>
            <i class="fas fa-phone-alt text-dark"></i>
            <span id="tel" class="text-white"></span>

            <a href="tg://resolve?domain=tarmanau" class="text-white">
              <br />
              <i class="fab fa-telegram text-dark"></i> Telegram
            </a>
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store/store.js";
import { vOnClickOutside } from "@vueuse/components";
import Atropos from 'atropos/vue';
const modal = ref(false);
function closeModal() {
  modal.value = false;
  show.value = false;
}

const store = useStore();
let show = ref(false);

let dialog = ref(false);

let openModal = (id, event) => {
  modal.value = true;
  let modal1 = document.querySelector(".h11");
  let demo = document.querySelector(".demo");
  let tel = document.querySelector("#tel");

  console.log(modal1);
  store.infos.forEach((el) => {
    console.log(modal1);
    if (el.id == id) {
      modal1.innerHTML = el.name;
      demo.innerHTML = el.title;
      tel.innerHTML = el.tel;
      show.value = !show.value;
    }
  });
};
</script>
<style lang="scss" scoped>
.demo {
  color: #fff;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
    Arial, sans-serif;
}

.h11 {
  font-family: sans-serif;
  font-weight: bolder;
}

.content {
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

@media screen and (max-width: 800px) {
}

.modal-content1 {
  border: 1px rgb(255, 255, 255, 0.18);
  margin-left: -10px;
  padding: 170px 40px;
  border: 1px solid #888;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 333;
  background-color: #000000;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23040a0a' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23071315' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%230b1d1f' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%230e262a' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23123034' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23112a2c' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%230f2425' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%230d1e1d' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%230b1716' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%2308100F' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");

background-size: cover;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url("../assets/backgroundForCourser/mock-integrations.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right top;
  }
}

.color {
  background: rgb(93, 191, 156);
  background: linear-gradient(13deg, rgba(93, 191, 156, 1) 0%, rgba(53, 73, 94, 1) 56%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border-bottom: 3px double rgb(93, 191, 156);
}

.box {
  transition: 0.5s;
  transform-style: preserve-3d;
  transform: perspective(2000px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: rgba(230, 243, 236, 0.426);
  background-image: url("../assets/backgroundForCourser/pngegg (2).png");
  background-size: cover;
  background-position: center;
  box-shadow: 15px 15px 10px #b6b7b7, 20px 20px 20px #cbccc6;
  border: dashed 5px rgb(12, 182, 134);
  box-sizing: content-box;
  border-radius: 20px;
  position: relative;
  .topInfo {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0px;
    position: relative;
    visibility: hidden;
    transition: 0.2s linear;
    background-color: #5d5c5c;
    color: white;
    overflow: hidden;
    transform: scale(0);
    position: absolute;
    z-index: 888;
    bottom: 0;
  }

  &:hover .topInfo {
    height: 100px;
    visibility: visible;
    transform: scale(1);
    position: absolute;
    z-index: 888;
    bottom: 0;
    left: 0;
  }
}
.worker {
  transform: translateZ(40px) !important ;
}
.roundedImage {
  border-radius: 30px;
  /* border-radius: 40% 60% 17% 83% / 40% 43% 57% 60% ; */
}
.roundedImage2 {
  transition: 0.5s;
  border-radius: 30px;
}

.v-enter-active,
.v-leave-active {
  transition: 0.6s ease;

}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  
  transform: scale(0.6);
}
</style>
