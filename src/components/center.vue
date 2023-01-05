
<template>
<<<<<<< HEAD
   <h1 class="h1 w-25 py-2 h1 "
      style="background: rgb(93,191,156);
       background: linear-gradient(13deg, rgba(93,191,156,1) 0%, rgba(53,73,94,1) 56%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; border-bottom:3px double rgb(93,191,156)" >
      Bizning ishlar</h1>
   <v-carousel cycle height="300" hide-delimiter-background show-arrows="hover" class=" car" data-aos="zoom-out-up">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
         <v-sheet height="100%" class="box">
            <div class="d-flex fill-height justify-center align-center box" >
               <div class="text-h2">
=======
   <div>

      <div class="centerdiv">
         <div class="boxboss">
            <div class="box1">
               <div class="ramka">
                  
>>>>>>> 08fc1ef18936aeb874f16196fe172f79604b8e13
                  <h1 class="text1 fw-bold salom1">Payment</h1>
                  <h1 class="text2 fw-bold salom2">Gets Easier</h1>
                  <p class="text-muted p w-75 fw-bold">{{ qiganish[i] }}</p>
               </div>
            </div>
         </v-sheet>
      </v-carousel-item>
   </v-carousel>
</template>

<script>
AOS.init()
export default {
   data() {
      return {
         colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
         ],
         slides: [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',

         ],
         qiganish: [
            'manashuni qiganmiz',
            'vabuni ham',
            'va yanna buni'
         ]
      }
   },
}
</script>

<style scoped>
.p {
   font-size: 30px;
}

.text1 {
   color: #857885;
}

.text2 {
   color: #5C0E62;
}

<<<<<<< HEAD
.h1 {
   margin-top: 40px;
=======

.rasm {
   border-radius: 80% 20% 70% 30% / 15% 66% 34% 85%;
}

.centerdiv {
   border-radius: 0% 100% 0% 100% / 62% 0% 100% 38%;
   background: white;
   width: 100%;
   height: 100vh;
   transform: rotate(0.5turn);
   position: relative;
   bottom: 50px;
   z-index: -1;
}

.boxboss {
   width: 100%;
   height: 70vh;
   display: flex;
   transform: rotate(0.5turn);
   position: relative;
}

.box1 {
   width: 50%;
   height: 70vh;
}

.boxcha {
   width: 50%;
   height: 70vh;
}

@media (max-width: 800px) {
   .ramka a {
      position: relative;
      top: 70px;
   }

   .shakl {
      width: 30%;
      height: 10vh;
   }

   .shakl h6 {
      position: relative;
      bottom: 500px !important;
   }

   .salom1 {
      position: relative;
      top: 40px;
      width: 50%;

   }

   .salom2 {
      width: 50%;
   }
}
@media (max-width: 380px){
   .boxcha{
      position: relative;
      bottom: 500px !important;
      
   }
}


@media (max-width: 550px) {
   .boxboss {
      display: block;
   }

   .box1 {
      width: 100%;
      height: 50vh;
      position: relative;
      top: 200px;
   }

   .boxcha {
      width: 100%;
      height: 50vh;
      position: relative;
      bottom: 600px;
      background-image: url("../assets/phone2.png");
      background-size: 80%;
   }

   .boxcha img {
      display: none;
   }

   .shakl {
      width: 20%;
      height: 8vh;
   }

   .shakl h6 {
      width: 300% !important;
      position: absolute;
      top: 30px;
      left: 27px;
      font-size: 10px;
   }

   .ramka a {
      position: relative;
      top: 50px;
   }

   .salom1 {
      position: relative;
      top: 30px;
   }

   .ramka {
      width: 100%;
      height: 50vh;
   }

   .ramka p {
      width: 100%;

   }
>>>>>>> 08fc1ef18936aeb874f16196fe172f79604b8e13
}
</style>


