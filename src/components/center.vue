<!-- JavaScript Qismi -->

<script>

</script>


<!-- html Qismi -->

<template>
<div>

    <div class="centerdiv">
        <div class="boxboss">
     <div class="box1">
        
        <div class="ramka">
            <div class="shakl">
                <h6 class="">CREDIT CARD</h6>
            </div>

            <h1 class="text1 fw-bold salom1">Payment</h1>
            <h1 class="text2 fw-bold salom2">Gets Easier</h1>

            <p class="text-muted w-50 fw-bold">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>

            <a href="" class="fw-bold ">Learn more <i class="fas fa-arrow-right"></i></a>
        </div>
     </div>


     <div class="boxcha">
        <img src="../assets/phone.png" alt="" class="rasm">
       
     </div>
        </div>
    </div>


</div>
</template>

<!-- Css Qismi -->

<style>
  .ramka{
    width: 80%;
    height: 70vh;
    display: block;
    margin: auto;
  }
  .ramka a{
    font-size: 30px;
    position: relative;
    left: 20%;
    top: 4%;
    color: #5C0E62;
  }
  .ramka p{
    width: 60% !important;
    height: 10vh;
    position: relative;
    left: 20%;
    top: 6%;
  }
  .text1{
    position: relative;
    left: 20%;
    top: 5%;
    color: #857885;
  }
  .text2{
    position: relative;
    left: 20%;
    top: 6%;
    color: #5C0E62;
  }

  .shakl{
    width: 20%;
    height: 15vh;
    border-radius: 37% 63% 70% 30% / 30% 48% 52% 70% ;
    background-color: rgba(128, 128, 128, 0.274);
    position: relative;
    left: 13%;
    top: 13%;
 }
 .shakl h6{
    color: red;
    position: relative;
    width: 200% !important;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    position: relative;
    left: 60px;
    top: 60px;
 }
.rasm{
    border-radius: 80% 20% 70% 30% / 15% 66% 34% 85% ;
}
.centerdiv{
    border-radius: 0% 100% 0% 100% / 62% 0% 100% 38% ;
    background: white;
    width: 100%;
    height: 100vh;
    transform: rotate(0.5turn);
    position: relative;
    bottom: 50px;
    z-index: -1;
 }
 .boxboss{
    width: 100%;
    height: 70vh;
    display: flex;
    transform: rotate(0.5turn);
    position: relative;
 }
 .box1{
    width: 50%;
    height: 70vh;
 }
 .boxcha{
    width: 50%;
    height: 70vh;
 }
@media (max-width: 800px){
   .ramka a{
      position: relative;
      top: 70px;
   }
   .shakl{
      width: 30%;
      height: 10vh;
   }
   .shakl h6{
      position: relative;
      bottom: 500px !important;
   }
   .salom1{
      position: relative;
      top: 40px;
      width: 50%;

   }
   .salom2{
      width: 50%;
   }
}


 @media (max-width: 550px){
   .boxboss{
      display: block;
   }
   .box1{
      width: 100%;
      height: 50vh;
      position: relative;
      top: 250px;
   
   }
   .boxcha{
      width: 100%;
      height: 50vh;
      position: relative;
      bottom: 460px;
      background-image: url("../assets/phone2.png");
      background-size: cover;
   }
   .boxcha img{
      display: none;
   }
   .shakl{
      width: 20%;
      height: 8vh;
   }
   .shakl h6{
      width: 300% !important;
      position: absolute;
      top: 30px;
      left: 27px;
      font-size: 10px;
   }
   .ramka a{
      position: relative;
      top: 50px;
   }
   .salom1{
      position: relative;
      top: 30px;
   }
   .ramka{
      width: 100%;
      height: 50vh;
   }
   .ramka p{
      width: 100%;
   
   }
 }
</style>


