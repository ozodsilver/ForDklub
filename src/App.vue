<template>
  <Home></Home>
  <Footer1></Footer1>
  <Teacher></Teacher>
  <kurs></kurs>
</template>
 
<script>
import Home from "./components/Home.vue";
import Footer1 from "./components/Footer.vue";
import Teacher from "./components/Teachers.vue";
import kurs from '../src/components/Kurs.vue'
export default {
  components: {
    Home,
    Footer1,
    Teacher,
    kurs
  },
  data() {
    return {};
  },
};
</script>

<style >

body{
  background: rgb(255, 255, 255);
}


</style>
