<template>
  <div class="container">
  <h1 class="my-5">Bizda Mavjud kurslar</h1>
    <div class="row">
      <div class="col-4 mt-5" v-for="info in infos" :key="info.id">
        <div
          class="card mt-5 text-center shadow-lg ripple p-3  bg-gradient "
          data-mdb-ripple-color="info"
          style="border-top-left-radius: 70px; border-bottom-right-radius: 70px;"
        >
          <div class="text-start fw-bold text-end">
          <span class="courseName">  {{ info.courseName }}</span>
          </div>
          <div class="card-body">
           <img :src="info.imageUrl" alt="" class="img-fluid  position-absolute" style="top:20px; left:30px; z-index:23; width:60px">
            <p class="card-text mt-3">
              {{ info.about }}
            </p>
            <router-link to="/regestration" :class = "{disabled:info.groups == 0 ? true: false}" class="btn btn-success opacity-80 rounded-pill d-block bg-gradient">Kurs haqida</router-link>
          </div>
          <div class="card-footer text-muted">Hozirda Mavjud guruhlar soni :<span :class="{'bg-danger': info.groups == 0 ? true : false}" class="badge bg-success text-white"> {{ info.groups }}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";

let infos = reactive([
  {
    id: 1,
    courseName: "Mobile dasturlash",
    imageUrl: new URL("../assets/backgroundForCourser/android.png", import.meta.url),
    about:"Mobile dasturlash Bilan ajoyib ilovalar dahosi bo'ling",
    groups: 2,
  },

  {
    id: 2,
    courseName: "Backend",
    about:"Backend web dasturchi bo'lib, Murakkab infrastructuralarni barpo  eting",
    imageUrl: new URL("../assets/c-sharp.png", import.meta.url),
    groups: 0,
  },

  {
    id: 3,
    courseName: "Frontend",
    about:"Frontend dasturlash Foydalanuvchilarni jalb etadigan interactive web saytlar dahosi bo'ling", 
    imageUrl: new URL("../assets/file_type_vue_icon_130078.png", import.meta.url),
    groups: 3,
  },

  {
    id: 4,
    courseName: "Grafik Design",
    about:"Mukkammal design yarating va grafik design mutahassisi bo'ling",
    imageUrl: new URL("../assets/illustrator.png", import.meta.url),
    groups: 2,
  },

  {
    id: 5,
    courseName: "3d Max",
    about:'3d Moddellarni mohirlik bilan yarating, va 3d Mutahassisiga aylaning',
    imageUrl: new URL("../assets/3smax.png", import.meta.url),
    groups: 2,
  },
]);

let color;
</script>

<style lang="scss" scoped>



.card{
  background: rgb(248, 240, 240) !important ;
background: linear-gradient(90deg, rgba(254, 254, 254, 0.869) 10%, rgba(217, 249, 240, 0.686) 100%) !important;

.courseName{
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
  &:after{
    content: '';
position:absolute;
width:50%;
height: 2px;

top:0;
left: 0;
background-color: rgba(29, 238, 186, 0.839);
  }

  &:before{
    content: '';
position:absolute;
width:50%;
height: 2px;
bottom:0;
right: 0;
background-color: rgb(8, 235, 159);
  }
}

}

.disabled{
  background-color: rgb(163, 167, 171) !important;
  opacity: 0.4;
  box-shadow: none !important;
  color:rgb(230, 225, 225) !important;
}

</style>
