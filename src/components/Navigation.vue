<template>
  <!-- Navbar -->
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src="../assets/dk.png" height="40" alt="MDB Logo" loading="lazy" />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#mavjudKurslar">Kurslar</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ishlar">DK projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#teachers">Mentorlar</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
    </div>
    <!-- Container wrapper -->
  </nav>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 500">
    <path
      fill="url(#lgrad)"
      fill-opacity="1"
      d="M0,320L60,314.7C120,309,240,299,360,272C480,245,600,203,720,197.3C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
    <defs>
      <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 0); stop-opacity: 0" />
        <stop offset="0%" style="stop-color: #61c19c; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #3eb29e; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: rgb(238, 111, 238); stop-opacity: 0" />
      </linearGradient>
    </defs>
  </svg>

  <div class="container">
    <div class="row">
      <div class="col-md-5 col-12 position-relative" style="margin-top: -25%">
        <div
          class="play-btn-box"
          v-if="show"
          @click="show = !show"
          style="cursor: pointer"
          ref = 'd333'
        >
          <div class="play-button"><i class="fas fa-play text-light" id="play2"></i></div>
          <div class="play-btn-line1" id="line1">
            <div class="play-btn-line2" id="line2"></div>
          </div>
        </div>

        <div class="h-100">
          <Transition name="bounce">
            <i
              class="fas fa-window-close float-right fa-2x"
              v-show="!show"
              @click="show = !show"
            ></i>
          </Transition>
          <Transition name="bounce">
            <iframe
              v-show="!show"
              class="w-100 rounded-5"
              src="https://www.youtube.com/embed/cUuUMVQzpjI"
              title="YouTube video player"
              height="300px"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              @click="this.requestFullScreen()"
            ></iframe>
          </Transition>
        </div>
      </div>
      <div class="col-12 col-md-7 d-md-block" style="margin-top: -30%">
        <img src="../assets/SVGdk.png" alt="" class="d-block m-auto w-100 img-fluid" ref = 'd33' />
      </div>
    </div>

 
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
let d3 = ref('')
let d33 = ref('')
let d333 = ref('')
let show = ref(true)



onMounted(()=>{
  document.addEventListener('mousemove', ()=>{
// d3.value.style.cssText =  `transform:translate(${-event.screenX/150}px, ${-event.screenY/80}px)`
d33.value.style.cssText =  `transform:translate(${event.screenX/190}px, ${event.screenY/105}px)`
d333.value.style.cssText =  `transform:translate(${-event.screenX/90}px, ${event.screenY/25}px)`
  })
})

</script>

<style scoped>
nav {
  border: none solid !important ;
  position: absolute;
  top: 0;
  width: 100%;
}
.btn1 {
  background-color: #ffbc51;
  box-shadow: 3px 3px 10px #ffbc5140;
  transition: 0.3s;
}
.btn1:hover {
  transform: translateY(-5px);
}
a {
  color: white !important;
  transition: 0.5s;
  font-family: sans-serif;
}
a:hover {
  color: rgba(0, 0, 0, 0.505) !important;
}
.btn2 {
  border: none;
  box-shadow: none;
  transition: 0.3s;
}
.btn2:hover {
  background-color: #f4c77d18;
}

#play {
  animation: 1s play infinite alternate;
  border-radius: 50%;
  box-sizing: content-box;
}

#play2 {
  transition: 1s;
  position: relative;
  z-index: 11111;
}

#play2:hover {
  transform: scale(1.3);
}

@keyframes play {
  0% {
    outline: #4caf50 solid 5px;
    padding: 0px;
  }
  50% {
    outline: #4caf50 solid 5px;
    padding: 20px;
  }

  100% {
    outline: #4caf50 solid 5px;
    padding: 20px;
  }
}

.play-btn-box {
  border: 2px rgba(165, 236, 203, 0.943) solid;
  border-radius: 50%;
  width: 287px;
  height: 287px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.play-btn-line1 {
  border: 2px rgba(178, 246, 217, 0.451) solid;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right-color: transparent;
}
.play-btn-line2 {
  border: 2px rgba(128, 229, 175, 0.906) solid;
  border-radius: 50%;
  width: 172px;
  height: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right-color: transparent;
}
.play-button {
  background-color: rgb(93, 191, 156);
  width: 106px;
  height: 106px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.play-button .fas {
  width: 30px;
  height: 30px;
  margin-left: 7px;
  font-size: 30px;
}

#line1 {
  animation: rotation 4s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

#line2 {
  animation: rotation1 3s infinite linear;
}

@keyframes rotation1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.bounce-enter-active {
  animation: bounce-in 2s;
}
.bounce-leave-active {
  display: none;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: translateX(-900px) scale(1.5) rotate(-45deg);
  }
  100% {
    transform: scale(1);
  }
}
</style>
