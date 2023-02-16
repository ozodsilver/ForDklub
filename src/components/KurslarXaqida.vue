<template>

  <div class="container-fluid my-4">

    <div class="container-fluid bosscard">
      <h1 class="py-5  w-25 my-5"
        style="background: rgb(93,191,156);
       background: linear-gradient(13deg, rgba(93,191,156,1) 0%, rgba(53,73,94,1) 56%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; border-bottom:3px double rgb(93,191,156) ">
        Bizda mavjud kurslar</h1>

      <div class="container py-5"
      data-aos="zoom-out-up">
        <div class="row mt-5 mb-0 pt-5 gap-5 " data-aos="zoom-out-up">
          <div class="col-12 v-col-md-3" v-for="course in courses" :key="course.id" data-aos="zoom-out-up">
            <div class="card w-100 shadow-lg rounded-5 box1">       
              <div class="card-body hover-shadow box"> 
                <h5 class="card-title">{{ course.course }}</h5>
                <p class="card-text">{{ course.title }}</p>
                <v_row></v_row>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>


  </div>
</template>

<script>
import v_row from "./v-row.vue";

export default {
  components: {
    v_row,
  },
  
  data() {
    return {
  
   
      courses: [
        {
          id: 1,
          course: 'Frontend',
          title: '',
        },

        {
          id: 2,
          course: 'Backend',
          title: ''
        },
        
        {
          id: 3,
          course: 'Mobile dasturlash (Flutter)',
          title: ''
        },
        
        {
          id: 4,
          course: 'Grafik dizayn',
          title: ''
        },
        {
          id: 5,
          course: '3D max',
          title: ''
        },
        {
          id: 6,
          course: 'Engilish',
          title: ''
        },
        {
          id: 7,
          course: 'Foundation',
          title: ''
        }
      ]
    };
  },
};
</script>

<style scoped>

*{
  cursor: pointer;
}
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: 2.5s ease-in-out;
}

.bottom {
  margin-bottom: 80px;
}

.battom1 {
  margin-bottom: 50px !important;
}

@media screen and (max-width: 800px) {

  .box {
    margin-top: 60px;
    margin: auto;
  }
}

i {
  color: rgba(89, 21, 103, 1);
}

.card {
  transition: 0.3s;
  width: 330px !important;
  height: 130px !important;
  border-left: 4px solid rgba(121, 138, 201, 1);
}

.card-title {
  color: rgba(92, 94, 110, 1);
  font-weight: bold;
}
</style>
