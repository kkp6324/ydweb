<template>
   <div class="topHeader">
    <h1 class="logo">
       <span class="logo-img">
        <img src="../assets/sq_logo.png" class="h_img">
       </span>
       <span class="logo-name">
         <img src="../assets/shuqixiaoshuo.png" class="h_img">   
       </span> 
    </h1>
    <ul class="items">
       <a href="#">
        <li class="user">
           <img src="../assets/下载.png" class="h_img1"> 
        </li>
       </a>
       <a href="#">
        <li class="dh">
            <img src="../assets/shujia.png">
        </li>
       </a>
       <a href="#">
        <li class="ss">
            <img src="../assets/sousuo.png">
        </li>
       </a> 
    </ul>
   </div> 
</template>
<script>

</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .topHeader{
        height: .88rem;
        background-color: #fff;
        border-bottom: 1px solid #f3f3f3;
        list-style: none;
        display: block;
    }
    .logo{
        display: inline-block;
        margin-left: .32rem;
        margin-top: .2rem;
        color: #333;
        font-size: .36rem;
        font-weight: 400;
    }
    .logo-img{
        display: inline-block;
        margin-right: .16rem;
        width: .5rem;
        height: .5rem;
        vertical-align: middle;
        color: #333;
        font-size: .36rem;
    }
    .h_img{
        width: 100%;
    }
    .logo-name{
        display: inline-block;
        width: 1.45rem;
        height: .32rem;
        vertical-align: middle;
        color: #333;
        font-size: .36rem;
        font-weight: 400;
    }
    .items{
        float: right;
        font-size: 0;
    }
    a{
      text-decoration: none;
      color: #333;  
    }
    .topHeader .items li{
        display: inline-block;
    margin-top: .2rem;
    margin-right: .32rem;
    width: .48rem;
    height: .48rem;
    }
    .h_img1{
        border-radius: 50%;
        width: .48rem;
    height: .48rem;
    }
</style>