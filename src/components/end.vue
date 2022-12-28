<template>
    <div class="kurinmas"></div>
    <div class="kurinmas2"></div>
        <div class="malumot">
          
           <div class="boxbos">

               <div class="box3">
                   <div class="shakl1"></div>
                  <div class="textbox">
                   <h1 class="text4 fw-bold">What Our <h1 class="text3 ms-2 fw-bold">Customer</h1> <h1 class="text5 fw-bold">Are saying</h1></h1>

                   <p class=" fw-bold polvon">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                  </div>
                

               </div>

               <div class="box4">
                   <div class="bobo">
                      <div class="img1">
                       <img src="../assets/bobo.png" alt="">
                      </div>
                      <p class="text-center fw-bold">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem lacus a, interdum nulla sem adipiscing inw</p>
                      <h1 class="text-center mt-4 fw-bold">Leo Maynus</h1>
                      <h5 class="text-center mt-2 fw-bold">CEO at Softpanda</h5>
                   </div>

                   <div class="img2" >
                       <img src="../assets/bobo2.png" alt="">
                   </div>

                   <div class="img3">
                       <img src="../assets/xola.png" alt="">
                   </div>

                   <div class="img4">
                       <img src="../assets/xola2.png" alt="">
                   </div>

                   <div class="img5">
                       <img src="../assets/xola3.png" alt="">
                   </div>


               </div>

              
           </div>

          

          
        </div>
</template>
   
<script>

</script>
   
<style>

@media (max-width: 550px){
   
   .img2{
      display: none;
   }
   .img3{
      display: none;
   }
   .img4{
      display: none;
   }
   .img5{
      display: none;
   }
   .kurinmas{
      display: none;
   }
   .shakl1{
      display: none;
   }
   .polvon{
      display: none;
   }
   .malumot{
      width: 100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%) !important;
  
   }
   .text4{
   
      font-size: 21px;
      display: inline-block;
      position: relative;
      bottom: 248px;
      left: 60px;
   }
   .text5{
      font-size: 21px;
      position: relative;
      bottom: 290px;
      width: 140% !important;
      left: 110px;
   }
   .text3{
      width: 100%;
      font-size: 21px;
      display: inline-block;
      position: relative;
      bottom: 280px;
      left: 160px;
      
   }

   .img1{
      position: relative;
      right: 10px;
      bottom: 40px;
   }
   .bobo{
      width: 90% !important;
      position: absolute !important;
      right: 140%;
     
   }
   .bobo p{
      position: relative;
      left: 6px;
      bottom: 20px;
   }
   .bobo h1{
      width: 70%;
      position: relative;
      left: 40px;
      top: 20px;
      font-size: 30px;
   }
   .bobo h5{
      width: 80%;
      font-size: 15px;
      position: relative;
      left: 26px;
   
   }
}


.bobo{
   width: 50%;
   height: 40vh;
   position: relative;
   top: 50px;
   left: 10px;
}
.bobo p{
   position: relative;
   top: 20px;
   color: white;
   font-size: 12px;
}
.bobo h1{
   color: #FFBC51;
}
.bobo h5{
   color: #FFBC51;
}
.img1{
   width: 135px;
   height: 135px;
   border-radius: 50%;
   background-color: #fff;
   padding: 5px;
   display: block;
   margin: auto;
}
.img1 img{
  display: block;
  margin: auto;
  position: relative;
  bottom: 2px;
  
}
.img2{
   width: 110px;
   height: 110px;
   background-color: #fff;
   border-radius: 50%;
   position: relative;
   left: 530px;
   bottom: 330px;
}
.img2 img{
  display: block;
  margin: auto;
  position: relative;
  top: 3px;
}
.img3{
   width: 84px;
   height: 84px;
   background-color: #fff;
   border-radius: 50%;
   position: relative;
   left: 500px;
   bottom: 230px;
}
.img3 img{
  display: block;
  margin: auto;
  position: relative;
  top: 3px;
}
.img4{
   width: 73px;
   height: 73px;
   background-color: #fff;
   border-radius: 50%;
   position: relative;
   left: 660px;
   bottom: 150px;
}
.img4 img{
  display: block;
  margin: auto;
  position: relative;
  top: 3px;
}
.img5{
   width: 99px;
   height: 99px;
   background-color: #fff;
   border-radius: 50%;
   position: relative;
   left: 320px;
   bottom: 180px;
}
.img5 img{
  display: block;
  margin: auto;
  position: relative;
  top: 3px;
}


.kurinmas{
   width: 100%;
   height: 60vh;
   position: absolute;
   top: 190%;
   z-index: 888888;
}


.kurinmas::before{
       content: '';
       width: 40%;
       position: absolute;
       top: 330%;
       height: 50vh;
       border-radius: 22% 78% 70% 30% / 30% 23% 77% 70% ;
       background-color: #85788530;;
       z-index: 88888;
       transform: rotate(0.32turn);
       right: 85%;
       
}


.text3{
   color:#5C0E62;
   display: inline-block;
}
.textbox{
   width: 60%;
   height: 20vh;
   position: relative;
   left: 20%;
   top: 170px;
}
.textbox p{
  color: white;
   width: 100%;
   position: relative;
   top: 23px;
}
.text4{
   color: white;
   display: inline-block;
}
.text5{
   color: white;
}
   .malumot{
       width: 100%;
       height: 110vh;
       position: absolute;
       background: linear-gradient(99.22deg, #5C0E62 1.27%, #00B5D0 92.23%);
       clip-path: polygon(100% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 0 100%, 0% 80%, 0 25%);
   }

   
   .boxbos{
       width: 100%;
       height: 90vh;
       display: flex;
       position: relative;
       top: 130px;
   }
   .box3{
       width: 50%;
       height: 90vh;
   }
   .box4{
       width: 50%;
       height: 90vh;
   }
   .shakl1{
       width: 10%;
       height: 8vh;
       border-radius: 37% 63% 70% 30% / 30% 48% 52% 70% ;
       background-color: rgba(128, 128, 128, 0.274);
       position: relative;
       left: 15%;
       top: 30%;
   }

</style>