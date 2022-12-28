<template>
<Home></Home>
<Footer1></Footer1>
<center></center>
<Teacher></Teacher>
<end></end>
<darkend></darkend>
</template>
 
<script>


import darkend from './components/darkend.vue'
import end from './components/end.vue'
import Home from'./components/Home.vue'
import Footer1 from'./components/Footer.vue'
import Teacher from'./components/Teachers.vue'
import center from './components/center.vue'
import Kurs from "./components/Kurs.vue"

export default {
  components: { 
    Home,
    Footer1,
    Teacher,
    Kurs,
    center,
    darkend,
    end
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
