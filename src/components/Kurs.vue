<template>
  <div class="container-fluid top">

    
    <h1 class="h1 w-50 py-2 pb-5"
      style="background: rgb(93,191,156);
       background: linear-gradient(13deg, rgba(93,191,156,1) 0%, rgba(53,73,94,1) 56%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; border-bottom:3px double rgb(93,191,156) ">
      Kurslar uchun texnalogiyalar</h1>
    <div class=" container  row w-100 mt-5 pt-5">
      <div class="  col-12 col-md-4 ">
        <div>
          <input type="radio" id="one" value="One" v-model="picked" class="form-check-input fs-1" />
          <label for="one" class="form-check-label fs-5">Frontend dasturlash</label>
        </div>
        <div>
          <input type="radio" id="two" value="two" v-model="picked" class="form-check-input fs-1" />
          <label for="two" class="form-check-label fs-5">Backend dasturlash</label>
        </div>
        <div>
          <input type="radio" id="three" value="three" v-model="picked" class="form-check-input fs-1" />
          <label for="three" class="form-check-label fs-5">MERN</label>
        </div>
        <div>
          <input type="radio" id="four" value="four" v-model="picked" class="form-check-input fs-1" />
          <label for="four" class="form-check-label fs-5">Mobile dasturlash (Flutter)</label>
        </div>
        <div>
          <input type="radio" id="five" value="five" v-model="picked" class="form-check-input fs-1 radi" />
          <label for="five" class="form-check-label fs-5">Mobile dasturlash</label>
        </div>
      </div>

      <div class=" box col-md-8 col-12 pad">
        <div class="mt-5 d-flex justify-content-around">
          <div class="card1 card box1 " :class="{ rang: picked == 'One' }">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card box1" :class="{ rang1: picked == 'One' }">
            <img src="../assets/css-3.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card box1" :class="{ rang2: picked == 'One' }">
            <img src="../assets/bootstrap.png " alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card box1" :class="{ rang3: picked == 'One' }">
            <img src="../assets/js.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card box1" :class="{ rang4: picked == 'One' }">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card box1" :class="{ rang: back }">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card box1">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
        </div>

        <div class="mt-5 d-flex justify-content-around ">
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
        </div>

        <div class="mt-5 d-flex justify-content-around ">
          <div class="card1 card">
             <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
       <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
       <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
       <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
       <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
       <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
          <div class="card1 card">
            <img src="../assets/html.png" alt="" class="d-block m-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
</template>
<script>
export default {
  data() {
    return {
      picked: "One",
      font: false,
      back: false,
    };
  },
};
</script>
<style scoped>
@media screen and (max-width: 800px){
  img{
    width: 30px !important;
    height: 30px !important;
  }
  .card{

    width: 42px !important;
    height: 1% !important;
  }
    .srt{
      flex-wrap: wrap;
    } 
    .box{
  bottom: 0 !important;
  left: 0 !important;
    }
}
.top {
  margin-top: 70px;
}

img {
  width: 55px;
  height: 55px;
}

.box1 {
  transition: .2s;
}

.h1 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #5c0e62;
  font-weight: bold;
  border-bottom: #5c0e62 double;
}

.rang {
  transition-delay: .1s;
  transform: scale(1.2);
  background-color: #8bc5ec7b;
  background-image: linear-gradient(135deg, #8bc5ec9a 0%, #9599E2 100%);
  box-shadow: 4px 3px 15px #8bc5ec89;
}

.rang1 {
  transition-delay: .2s;
  transform: scale(1.2);
  background-color: #8bc5ec7b;
  background-image: linear-gradient(135deg, #8bc5ec9a 0%, #9599E2 100%);
  box-shadow: 4px 3px 15px #8bc5ec89;
}

.rang2 {
  transition-delay: .3s;
  transform: scale(1.2);
  background-color: #8bc5ec7b;
  background-image: linear-gradient(135deg, #8bc5ec9a 0%, #9599E2 100%);
  box-shadow: 4px 3px 15px #8bc5ec89;
}

.rang3 {
  transition-delay: .5s;
  transform: scale(1.2);
  background-color: #8bc5ec7b;
  background-image: linear-gradient(135deg, #8bc5ec9a 0%, #9599E2 100%);
  box-shadow: 4px 3px 15px #8bc5ec89;
}

.rang4 {
  transition-delay: .6s;
  transform: scale(1.2);
  background-color: #8bc5ec7b;
  background-image: linear-gradient(135deg, #8bc5ec9a 0%, #9599E2 100%);
  box-shadow: 4px 3px 15px #8bc5ec89;
}

.box {
  position: relative;
  bottom: 35px;
  left: 56px;
}

.react {
  color: rgb(73, 118, 209);
}

i {
  font-size: 70px;
}

.card1 {
  width: 10%;
  height: 80px !important;
  color: orange;
}
</style>
