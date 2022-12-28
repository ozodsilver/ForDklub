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
>>>>>>> bd43f1c886b6c6e0866147f608c7d63ee748b3b1
</script>

<style >

body{
  background: rgb(255, 255, 255);
}


</style>
