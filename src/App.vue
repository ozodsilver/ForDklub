<template>
  <Home></Home>
  <Footer1></Footer1>
  <Teacher></Teacher>
  <Kurs></Kurs>
</template>
 
<script>
import Home from "./components/Home.vue";
import Footer1 from "./components/Footer.vue";
import Teacher from "./components/Teachers.vue";
import Kurs from "./components/Kurs.vue";
export default {
  components: {
    Home,
    Footer1,
    Teacher,
    Kurs
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
