
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

export default{
  components:{
  Home,
  Footer1,
  Teacher,
  center,
  end,
  darkend,
},
  data(){
    return{


    }
  }
}

</script>


<style scoped>


</style>
