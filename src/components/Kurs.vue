<template>
  <div class="container top">
    <h1 class="h1 w-50 py-3 pb-5">Kurslar uchun texnalogiyalar</h1>
    <div class="d-flex justify-content-between w-100 mt-5 pt-5">
      <div>
        <div>
          <input
            type="radio"
            id="one"
            value="One"
            v-model="picked"
            class="form-check-input fs-1"
          />
          <label for="one" class="form-check-label fs-5">Frontend dasturlash</label>
        </div>
        <div>
          <input
            type="radio"
            id="two"
            value="two"
            v-model="picked"
            class="form-check-input fs-1"
          />
          <label for="two" class="form-check-label fs-5">Backend dasturlash</label>
        </div>
        <div>
          <input
            type="radio"
            id="three"
            value="three"
            v-model="picked"
            class="form-check-input fs-1"
          />
          <label for="three" class="form-check-label fs-5">MERN</label>
        </div>
        <div>
          <input
            type="radio"
            id="four"
            value="four"
            v-model="picked"
            class="form-check-input fs-1"
          />
          <label for="four" class="form-check-label fs-5"
            >Mobile dasturlash (Flutter)</label
          >
        </div>
        <div>
          <input
            type="radio"
            id="five"
            value="five"
            v-model="picked"
            class="form-check-input fs-1"
          />
          <label for="five" class="form-check-label fs-5">Mobile dasturlash</label>
        </div>
      </div>
      <i class="flaticon-airplane49"></i>
      <span class="flaticon-airplane49"></span>

      <div class="w-75 box mt-4">
        <div class="mt-5 d-flex justify-content-around d-block">
          <div class="card1 card box1" :class="{ rang: picked == 'One' }">
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
            <i class="fab fa-react d-block m-auto react"></i>
          </div>
          <div class="card1 card box1" :class="{ rang: back }">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
        </div>

        <div class="mt-5 d-flex justify-content-around">
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
        </div>

        <div class="mt-5 d-flex justify-content-around">
          <div class="card1 card">
            <i class="fab fa-react d-block m-auto react"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
          </div>
          <div class="card1 card">
            <i class="fab fa-html5 d-block m-auto"></i>
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
.top {
  margin-top: 70px;
}
img {
  width: 55px;
  height: 55px;
}
.box1 {
  transition: 0.3s;
}
.h1 {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #5c0e62;
  font-weight: bold;

  border-bottom: #5c0e62 double;
}
.rang {
  transition-delay: 0.3s;
  transform: scale(1.2);
  background-color: #5c0e629e;
}
.rang1 {
  transition-delay: 0.6s;
  transform: scale(1.2);
  background-color: #5c0e62;
}
.rang2 {
  transition-delay: 0.9s;
  transform: scale(1.2);
  background-color: #5c0e62;
}
.rang3 {
  transition-delay: 1.1s;
  transform: scale(1.2);
  background-color: #5c0e62;
}
.rang4 {
  transition-delay: 1.4s;
  transform: scale(1.2);
  background-color: #5c0e6256;
}
.box {
  margin-bottom: 300px !important;
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
