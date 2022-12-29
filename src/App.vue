<template>
<Home></Home>
<KurslarXaqida></KurslarXaqida>
<Center></Center>
<Teacher></Teacher>
<end></end>
<footer2></footer2>

</template>
 
<script>


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
  data() {
    return {};
  },
};

</script>

<style >

body{
  background: rgb(255, 255, 255);}


</style>
