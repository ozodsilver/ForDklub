<template>
  <h1 class=" w-25 container  ms-5  py-3">Teachers</h1>
  <div class="container srt d-flex  srt2  m-auto ">
    
    <div class=" w-100 srt1">
      <div class=" d-flex justify-content-between p-3 m-2">

         <div class=" box box_hover boxmax" @click="tanlanganComponent = 'FoureTeacher'">
         </div>

         <div class=" box1 mt-2 box_hover boxmax"  @click="tanlanganComponent = 'ThirdTheacher'">
         </div>

         <div class=" box box_hover boxmax" @click="tanlanganComponent = 'FoureTeacher'">
         </div>

         <div class=" box1 mt-2 box_hover boxmax"  @click="tanlanganComponent = 'ThirdTheacher'">
         </div>

         <div class=" box box_hover boxmax" @click="tanlanganComponent = 'FoureTeacher'">
         </div>

         <div class=" box1 mt-2 box_hover boxmax"  @click="tanlanganComponent = 'ThirdTheacher'">
         </div>

      </div>

      <div class=" d-flex justify-content-between mt-5 m-3">
        <div class=" box2 box_hover boxmax" @click="tanlanganComponent = 'SecondTeacher'">
             </div>
          

             <div class=" box3 mt-2 box_hover boxmax">
          </div>

          <div class=" box4  box_hover boxmax" @click="tanlanganComponent = 'FirstTeacherVue'">
          </div>

          <div class=" box2 box_hover boxmax" @click="tanlanganComponent = 'SecondTeacher'">
             </div>

             <div class=" box3 mt-2 box_hover boxmax">
          </div>

          <div class=" box4  box_hover boxmax" @click="tanlanganComponent = 'FirstTeacherVue'">
          </div>

          

      </div>



    </div>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        class=" ">
        
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

    
      <!-- <div class=" mt-5 container srt srt3 d-block m-auto">
        <Transition>
  <component :is="tanlanganComponent"></component>
  </Transition>
      </div> -->



    
  </div>
</template>
<script>
import FirstTeacherVue from './FirstTeacher.vue';
import SecondTeacher from './SecondTeacher.vue';
import ThirdTheacher from './ThirdTeacher.vue';
import FoureTeacher from './4Teacher.vue'
export default {
  components:{
    FirstTeacherVue,
    SecondTeacher,
    ThirdTheacher,
    FoureTeacher
   
  },
  data(){
    return{
      tanlanganComponent:'FirstTeacherVue',
      dialog:false,
      infos:[{
        teacher:'Haha'
      }]
    }
  }
}
</script>
<style scoped>

@media screen and (max-width: 800px) {
  .srt2{
   width: 80%;
   display: flex;
   align-items: center;
   flex-wrap: wrap;

  }
  .srt3{
      display: block;
  }
  .srt1{
    width: 80% !important;
    margin-top: 90px !important;
    margin: auto;

 
  }
  .boxmax{
    width: 100px !important;
    height: 100px !important;
   
    
  }
  .box4{
    display: none;
  }
}

h1{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  border-bottom: double 3px;
  color: rgba(34, 87, 14, 0.712);
}

.srt{
transition: 2s;
}
.btn{
  color:rgba(92, 14, 98, 1) ;
}
.box{
  width: 150px;
  height: 150px;
  background-image: url('../assets/man-613601.jpg');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;


}
.box_hover{
  transition: 1s;
}
.box1{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004.png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
 
  
}
.box2{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004.png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  
}
.box3{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004 (1).png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  
}
.box4{
  width: 150px;
  height: 150px;
  background-image: url('../assets/pexels-italo-melo-2379004 (2).png');
  border-radius: 30% 70% 62% 38% / 30% 30% 70% 70% ;
  background-size: cover;
  transform: rotate(10deg);
  
}
.box_hover:hover{
   background-image: url('../assets/john-torcasio-tgVm0tkbf1U-unsplash.png');
   transform: perspective(50rem) translateZ(50px);
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.358);
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.melt-enter-active { animation: 2s melt-enter; }
.melt-leave-active { animation: 2s melt-leave; }

@keyframes melt-enter {
  0% {
    clip-path: path('M0 -0.12C8.33 -8.46 16.67 -12.62 25 -12.62C37.5 -12.62 35.91 0.15 50 -0.12C64.09 -0.4 62.5 -34.5 75 -34.5C87.5 -34.5 87.17 -4.45 100 -0.12C112.83 4.2 112.71 -17.95 125 -18.28C137.29 -18.62 137.76 1.54 150.48 -0.12C163.19 -1.79 162.16 -25.12 174.54 -25.12C182.79 -25.12 191.28 -16.79 200 -0.12L200 -34.37L0 -34.37L0 -0.12Z');
  }
  100% {
    clip-path: path('M0 199.88C8.33 270.71 16.67 306.13 25 306.13C37.5 306.13 35.91 231.4 50 231.13C64.09 230.85 62.5 284.25 75 284.25C87.5 284.25 87.17 208.05 100 212.38C112.83 216.7 112.71 300.8 125 300.47C137.29 300.13 137.76 239.04 150.48 237.38C163.19 235.71 162.16 293.63 174.54 293.63C182.79 293.63 191.28 262.38 200 199.88L200 0.13L0 0.13L0 199.88Z');
  }
}

@keyframes melt-leave {
  0% {
    clip-path: path('M0 0C8.33 -8.33 16.67 -12.5 25 -12.5C37.5 -12.5 36.57 -0.27 50 0C63.43 0.27 62.5 -34.37 75 -34.37C87.5 -34.37 87.5 -4.01 100 0C112.5 4.01 112.38 -18.34 125 -18.34C137.62 -18.34 138.09 1.66 150.48 0C162.86 -1.66 162.16 -25 174.54 -25C182.79 -25 191.28 -16.67 200 0L200 200L0 200L0 0Z');
  }
  100% {
    clip-path: path('M0 200C8.33 270.83 16.67 306.25 25 306.25C37.5 306.25 36.57 230.98 50 231.25C63.43 231.52 62.5 284.38 75 284.38C87.5 284.38 87.5 208.49 100 212.5C112.5 216.51 112.38 300.41 125 300.41C137.62 300.41 138.09 239.16 150.48 237.5C162.86 235.84 162.16 293.75 174.54 293.75C182.79 293.75 191.28 262.5 200 200L200 200L0 200L0 200Z');
  }
}

  
</style>