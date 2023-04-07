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
            {{ info.courseName }}
          </div>
          <div class="card-body">
           
            <p class="card-text">
              {{ info.about }}
            </p>
            <router-link to="/regestration" class="btn btn-success opacity-80 rounded-pill d-block bg-gradient">Kurs haqida</router-link>
          </div>
          <div class="card-footer text-muted">Mavjud guruhlar : {{ info.groups }}</div>
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
    imageUrl: new URL("../assets/java.png", import.meta.url),
    about:'Mobile dasturlash Bilan ajoyib ilovalar dahosi b"ling',
    groups: 4,
  },

  {
    id: 2,
    courseName: "Mobile dasturlash",
    about:'Mobile dasturlash Bilan ajoyib ilovalar dahosi b"ling',
    imageUrl: new URL("../assets/java.png", import.meta.url),
    groups: 2,
  },

  {
    id: 3,
    courseName: "Frontend",
    about:'Mobile dasturlash Bilan ajoyib ilovalar dahosi b"ling',
    imageUrl: new URL("../assets/java.png", import.meta.url),
    groups: 7,
  },

  {
    id: 4,
    courseName: "Backend",
    about:'Mobile dasturlash Bilan ajoyib ilovalar dahosi b"ling',
    imageUrl: new URL("../assets/java.png", import.meta.url),
    groups: 4,
  },

  {
    id: 5,
    courseName: "Grafik Design",
    about:'Mobile dasturlash Bilan ajoyib ilovalar dahosi b"ling',
    imageUrl: new URL("../assets/java.png", import.meta.url),
    groups: 1,
  },
]);
</script>

<style lang="scss" scoped>

.card{
  background: rgb(248, 240, 240) !important ;
background: linear-gradient(90deg, rgba(254, 254, 254, 0.869) 10%, rgba(217, 249, 240, 0.686) 100%) !important;
}

</style>
