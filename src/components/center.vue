
<template>
   <h1 class="h1 w-25 py-2 h1 "
      style="background: rgb(93,191,156);
       background: linear-gradient(13deg, rgba(93,191,156,1) 0%, rgba(53,73,94,1) 56%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; border-bottom:3px double rgb(93,191,156)" >
      Bizning ishlar</h1>
   <v-carousel cycle height="300" hide-delimiter-background show-arrows="hover" class=" car" data-aos="zoom-out-up">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
         <v-sheet height="100%" class="box">
            <div class="d-flex fill-height justify-center align-center box" >
               <div class="text-h2">
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

.h1 {
   margin-top: 40px;
}
</style>


