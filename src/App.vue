<template>

<Home  ></Home>
<KurslarXaqida ></KurslarXaqida>
<span id="ishlar"></span>
<Center v-if="store.isActive"></Center>
<span id="jaxon"></span>
<span id="teachers"></span>
<Teacher ></Teacher>
<Kurs></Kurs>
<end ></end>
<footer2 ></footer2>


</template>
 
<script>
import { useStore } from './store/store'
import footer2 from './components/Footer1.vue'
import end from './components/end.vue'
import Home from'./components/Home.vue'
import KurslarXaqida from'./components/KurslarXaqida.vue'
import Teacher from'./components/Teachers.vue'
import Center from './components/center.vue'
import Kurs from "./components/Kurs.vue"

export default {
  components: { 
    Home,
    KurslarXaqida,
    Teacher,
    Kurs,
    Center,
    end,
    footer2,
 
  },

  setup(){
    let store = useStore()
    return {store}
  },

  data() {
    return {};
  },

  mounted(){
    AOS.init()
  }
};

</script>

<style >

body{
background: rgb(255, 255, 255);
scroll-behavior: auto;
}


</style>
