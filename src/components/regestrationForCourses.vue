<template>
    <div>
<div class="container mt-5">
<button class="btn btn-success  bg-gradient " id="home">Home page</button>
<div class="row align-items-center">
<h1 class="mt-3 mb-5 text-dark">Course:</h1>
<div class="col-7">
    <div class="card mb-3 p-4">
  <div class="row g-0 p-0">
    <div class="col-md-4  ">
      <img
        src="../assets/file_type_vue_icon_130078.png"
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start "
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</div>

</div>

<div class="col-5 position-relative">
<img src="../assets/xodim/ozodxon.png" alt="" id="employee" class=" img-fluid">
</div>
</div>

</div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#home{
  clip-path: polygon(11% 0, 100% 0%, 100% 100%, 12% 100%, 0% 50%);
}
#employee {
  position: relative;
  
  &:before{
    content: 'kjkjkj';
    position: absolute;
  top: 0;
    height: 200px;
    width: 100%;
    z-index: 11111111;
    background: rgb(65,184,131) !important;
// background: linear-gradient(180deg, rgba(65,184,131,0.5466561624649859) 23%, rgba(53,73,94,0) 92%);
  }
}
</style>