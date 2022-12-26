
<template>
<Home></Home>
<Footer1></Footer1>
<Teacher></Teacher>
<kursla></kursla>
</template>


<script>

import Home from'./components/Home.vue'
import Footer1 from'./components/Footer.vue'
import Teacher from'./components/Teachers.vue'
import kursla from './components/Kurs.vue';
export default{
  components:{
  Home,
  Footer1,
  Teacher,
  kursla
},
  data(){
    return{


    }
  }
}

</script>


<style scoped>


</style>
