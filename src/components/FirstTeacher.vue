<template>

<span>
  <p class="srt p1 "><p class="p fw-bold text-danger">MOBILE TRANSACTION</p> </p>
    <h1 class="fw-bold text-secondary w-75">
      Smart Mobile <span>Banking</span>
    </h1>
    <p class=" w-75">Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem adipiscing inw</p>
    <button class="btn">Learn more</button>
    
</span>


</template>
<script>
export default {
  
}
</script>
<style scoped>

 
.p{
  position: relative;
  z-index: 333;
}
.p1::before{
content: '';
position: absolute;
width: 90px;
height: 80px;
margin-top: -30px;
border-radius: 45% 55% 41% 59% / 55% 65% 35% 45% ;
background-color: #F7F3FA;;
}
span{
  color:rgba(92, 14, 98, 1) ;
  transition: 2s;
}
.btn{
  color:rgba(92, 14, 98, 1) ;
}

</style>