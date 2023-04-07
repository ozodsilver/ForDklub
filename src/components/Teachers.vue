<template>
  <h1 class="w-25 fw-light ms-5 py-3 mt-5 color">Kurs Mentorlari</h1>
  <div class="container-fluid">
    <div class="row mt-5 gap-5 justify-content-evenly">
      <div class="col-3 col-md-4 col-lg-3 parent  mt-5" v-for="info of infos" :key="info.id">
        <div class="box d-flex justify-content-center" style="height: 550px">
        <img :src="info.icon" alt="" class="w-25 position-absolute rounded" style="left:0px; top:30px">
          <div class="topInfo p-2">
            <p>
              {{ info.title }}
            </p>
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
        <h1 class="text-light h11" id="modal"></h1>
        <p class="demo"></p>
        <p>
          <i class="fas fa-phone-alt text-success"></i>
          <span id="tel" class="text-white"></span>
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
		max: 25,
		speed: 400,

    reset:true,
	});
	
	//It also supports NodeList
	VanillaTilt.init(document.querySelectorAll(".parent"));
})
let infos = ref([
  {
    id: 1,
    name: "Shakhzod Toshboyev",
    title: "4 yil ish tajribasiga ega middle Mobile software developer",
    image: new URL("../assets/xodim/shakhzod.png", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },

  {
    id: 2,
    name: "Jaxon",
    title: "fdsfdsfsdfdsfdssss",
    image: new URL("../assets/xodim/sharifxon.png", import.meta.url),
    icon: new URL("../assets/js.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },

  {
    id: 3,
    name: "nimdafdsa",
    title: "fdsfdsfsdfdsfdsaaa",
    image: new URL("../assets/xodim/shakhzod.jpg", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },
  {
    id: 4,
    name: "nimdafdsa",
    title: "fdsfdsfsdfdsfdswsedasedas",
    image: new URL("../assets/xodim/shakhzod.jpg", import.meta.url),
    icon: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    tel: "+998 99 670 03 25",
  },
  {
    id: 5,
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
  background-color: linear-gradient(
    135deg,
    rgb(255, 255, 255, 0.1) rgb(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px rgb(255, 255, 255, 0.18);
  margin-left: -10px;
  padding: 80px;
  border: 1px solid #888;
  width: 70%;
  position: fixed;
  top: 30%;
  left: 15%;
  z-index: 333;
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
  box-shadow: 15px 15px 10px  #e4e0e0, 20px 20px 20px  #cbccc6;

  border-radius: 30px;
  position: relative;
  .topInfo {
    width: 100%;
    margin: auto;
    margin-top: -4px;
    height: 0px;
    position: relative;
    visibility: hidden;
    transition: 0.2s linear;
    background-color: rgb(65, 65, 65);
    color: white;
    overflow: hidden;
    transform: scale(0);
    transform-style: preserve-3d;
  transform: perspective(2000px);
  }

  &:hover .topInfo {
    height: 100px;
    visibility: visible;
    transform: scale(1);
    position: absolute;
    z-index:888;
    top: 0;
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
