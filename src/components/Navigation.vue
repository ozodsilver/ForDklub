<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Navbar brand -->
      <a class="navbar-brand me-2" href="https://mdbgo.com/">
        <img
          src="../assets/dk.png"
          height="40"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>

      <!-- Collapsible wrapper -->
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarCenteredExample"
      >
        <!-- Left links -->

        <div class="m-auto">
          <ul class="navbar-nav mb-2 mb-lg-0 gap-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Developers</a>
            </li>
            <!-- Navbar dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">Company</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>

        <!-- Left links -->

        <div class="d-flex align-items-center">
          <button type="button" class="btn btn2 px-3 me-2 rounded-9 text-light">
            Support
          </button>
          <button type="button" class="btn btn-primary me-3 rounded-9 btn1">
            Sign up
          </button>
        </div>
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>

  <!-- Navbar -->

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="url(#lgrad)"
      fill-opacity="1"
      d="M0,320L60,314.7C120,309,240,299,360,272C480,245,600,203,720,197.3C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
    <defs>
      <linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 0); stop-opacity: 0" />
        <stop offset="0%" style="stop-color: #61C19C; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: #3EB29E; stop-opacity: 1" />
        <stop offset="100%" style="stop-color: rgb(238, 111, 238); stop-opacity: 0" />
      </linearGradient>
    </defs>
  </svg>

 <div class="container-fluid">
  <div class="row">
    <div class="col-3"></div>
    <div class="col-8 " style="margin-top: -350px;">
      <img src="../assets/jaxon.svg" alt="" class="w-100 img-fluid" />
    </div>
  </div>
 </div>
</template>

<script></script>

<style scoped>
nav {
  background: transparent !important;
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
</style>
