<template>
<div class="content">
    <header class="header">
		<div @click="back">
		   <a href="#" class="back">
			   <img src="../assets/return.svg" class="icon_back">
		   </a>
		   <h1 class="header_title">畅销完本</h1> 
	   </div>
    </header>
    <fullkul></fullkul>
</div>
</template>

<script>
import fullkul from "./fullkul.vue";
export default {
    data(){
		return{
				
		}
	},
	methods:{
		back(){
			window.location.href="http://127.0.0.1:8080/#/"
		}
	},
    components:{
     "fullkul":fullkul,
  },
}


</script>
<style scoped>
div {
    display: block;
}
.content{
    padding-bottom: 1px;
    background-color: #f6f7f9;
}
.header{
	width: 100%;
    position:fixed;
    box-sizing: border-box;
    height: 44px;
    padding-top: 11px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f1f2;
    background-color: #fff;
	z-index: 10000;
}
.back{
    position: absolute;
    padding: 0px 13px 10px 14px;

}
a{
    text-decoration: none;
    color: inherit;
    outline: 0;
}
.icon_back{
    width: 24px;
    height: 24px;
    vertical-align: -.25ex;  
}
.header_title{
	margin:0;
    font-size: 14px;
    font-weight: 400;
    line-height:24px;
    position: fixed;
    left: 43px;
    overflow: hidden;
    max-width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.header_right{
    position: absolute;
    padding: 4px 6px;
    top: 0;
    right: 0;
    bottom: 0;
}
.right_first>.icon_ss{
    float: right;
    overflow: hidden;
    width: 22px;
    height: 36px;
}
.icon_ss{
    vertical-align: -.25ex;
    fill: currentColor;
    margin-right:11px;
}
</style>