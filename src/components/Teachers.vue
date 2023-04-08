<template>
  <h1 class="w-25 fw-light ms-5 py-3 mt-5 color">Kurs Mentorlari</h1>
  <div class="container">
    <div class="row mt-5 gap-5 justify-content-evenly">
      <div class="col-3 col-md-4 col-lg-3 parent  mt-5" v-for="info of infos" :key="info.id">
        <div class="box d-flex justify-content-center" style="height: 400px">
        <img :src="info.icon" alt="" class="w-25 position-absolute rounded" style="left:0px; top:30px">
          <div class="topInfo flex-column p-3">
            <p>
              {{ info.name }}
            </p>

            <button   @click="openModal(info.id)" class="btn btn-success">About mentor</button>
          </div>
          <img
            :src="info.image"                     
            alt=""
            @click="openModal(info.id)"
            class="img-fluid w-100 mt-5 position-absolute worker"
        
            :class="{
              roundedImage: info.id % 2 == 0 ? true : false,
              roundedImage2: info.id % 2 == 1 ? true : false,
            }"
            style="cursor: pointer; bottom:0"
            
          />
        </div>
      </div>
      <div class="content" v-if="show"></div>
      <div
        class="modal-content1 rounded-6"
        v-show="modal"
        v-on-click-outside="closeModal"
      >
        <h3 class="text-light h11 bg-light text-dark d-inline-block px-4 py-2 rounded" id="modal"></h3>
        <p class="demo"></p>
        <p>
          <i class="fas fa-phone-alt text-dark"></i> 
          <span id="tel" class="text-white"></span>
         
<a href="tg://resolve?domain=tarmanau" class="text-white">
<br>
<i class="fab fa-telegram text-dark "></i> Telegram </a>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store/store.js";
import { vOnClickOutside } from "@vueuse/components";

const modal = ref(false);
function closeModal() {
  modal.value = false;
  show.value = false;
}

const store = useStore();
let show = ref(false);

let dialog = ref(false);


onMounted(()=>{
  VanillaTilt.init(document.querySelector(".parent"), {
		max: 5,
		speed: 400,

    reset:true,
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".parent"));
})
let infos = ref([
  {
    id: 1,
    name: "Ozodxon Rabbanaqulov",
    title: "Frontend: 2 yil  tajribasiga ega middle  software enginer.",
    image: new URL("../assets/xodim/ozodxon.png", import.meta.url),
    icon: new URL("../assets/file_type_vue_icon_130078.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },

  {
    id: 2,
    name: "Shakhzod Toshboyev",
    title: "2 yil ish tajribasiga ega middle mobile software enginer",
    image: new URL("../assets/xodim/shakhzod.png", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },

  {
    id: 3,
    name: "Omonov Sayidsharifxon",
    title: "fdsfdsfsdfdsfdssss",
    image: new URL("../assets/xodim/sharifxon.png", import.meta.url),
    icon: new URL("../assets/js.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },

  {
    id: 4,
    name: "nimdafdsa",
    title: "fdsfdsfsdfdsfdsaaa",
    image: new URL("../assets/xodim/shakhzod.jpg", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },
  {
    id: 5,
    name: "nimdafdsa",
    title: "fdsfdsfsdfdsfdswsedasedas",
    image: new URL("../assets/xodim/shakhzod.jpg", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },
  {
    id: 6,
    name: "nimdafdsa",
    title: "fdsfdsfsdfdsfdswwwww",
    image: new URL("../assets/xodim/shakhzod.jpg", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },
]);

let openModal = (id, event) => {
  modal.value = true;
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
      show.value = !show.value;
    }
  });
};
</script>
<style lang="scss" scoped>
.demo {
  color: #fff;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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
  padding:170px 40px;
  border: 1px solid #888;
  width: 90%;
  position: fixed;
  top: 25%;
  left: 6%;
  z-index: 333;
  background-color: #35495E;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2341B883'/%3E%3Cstop offset='1' stop-color='%2335495E'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%2369EFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2369EFFF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
background-repeat: no-repeat;
background-size: cover;
background-position: center;


  &:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url('../assets/backgroundForCourser/mock-integrations.svg');
    background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;

  }
}

.color {
  background: rgb(93, 191, 156);
  background: linear-gradient(
    13deg,
    rgba(93, 191, 156, 1) 0%,
    rgba(53, 73, 94, 1) 56%
  );
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
  background-image: url('../assets/backgroundForCourser/pngegg (2).png');
  background-size: cover;
  background-position: center;
  // background-repeat: no-repeat;
  // background: linear-gradient(
  //   80deg,
  //   rgba(16, 47, 175, 0.046) 0%,
  //   rgba(158, 240, 220, 0.26) 100%
  // );
  box-shadow: 15px 15px 10px  #b6b7b7, 20px 20px 20px  #cbccc6;
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
    background-color: #5D5C5C;
    color: white;
    overflow: hidden;
    transform: scale(0);
    position: absolute;
    z-index:888;
  bottom: 0;
  
  }

  &:hover .topInfo {
    height: 100px;
    visibility: visible;
    transform: scale(1);
    position: absolute;
    z-index:888;
  bottom: 0;
  left: 0;
   
  }


}
.worker{

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
</style>
