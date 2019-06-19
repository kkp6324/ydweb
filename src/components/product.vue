<template>   
    <div class="title1">
        <div class="title2">
            <span class="title3">精品推荐</span>
        </div>
        <booklist></booklist>
    </div>
</template>

<script>
import book_list from "./book_list"
export default {
    data(){
		return{
				
		}
	},
    components:{
     "booklist":book_list,
  },
}
</script>
<style scoped>
.title1{
    display:block;
    font-size:12xp;
    color:#494949;
    line-height:12px;
}
.title2{
	padding-left: 16px !important;
    display:block;
    background: #fff;
    width: 100%;
    padding: 16px 0;
    font-size: 0;
    position: relative;
    padding-bottom: 0;
}
.title3{
    padding-left: 10px;
    color: #333;
    display: inline-block;
    height: 16px;
    line-height: 4px;
    font-size: 14px;
    position: relative;   
}
.title3:after{
    content: '';
    width: 2px;
    height: 16px;
    display: inline-block;
    background: red;
    position: absolute;
    top: -5px;
    left: 0;
}

</style>