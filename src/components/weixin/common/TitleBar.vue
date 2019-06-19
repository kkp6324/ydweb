
<template>
	<div class="Header">
		<span class="font">{{meg}}</span>
		<img :src="img_url"  class="sousuo" @click="mysearch">
		<img :src="img_url2" class="plus" @click="myadd">
	</div>
</template>

<script>
	export default{
		name:"TitleBar",  //子组件名称	
		props:{    //接收父组件数据
		  meg:{default:""},//meg默认字符串
		  img_url:{default:""},
		  img_url2:{default:""},
		  mysearch:{type:Function},//函数
		  myadd:{type:Function}
		},
		methods:{
			// plusbb(){
			// 	console.log("+")
			// },
			// sousuoaa(){
			// 	console.log("搜索")
			// }
		}
	}
</script>

<style >
	.Header{
		z-index: 10000;
		position:fixed;
		width: 100%;
	}
	.sousuo{
		width: 28px;
		padding:0px;
		background-color: #3e3a39;
		border:none;
		position: absolute;
		right:50px;
		top:10px;
	}
	.plus{
		width: 28px;
		padding:0px;
		background-color: #3e3a39;
		border:none;
		position: absolute;
		right: 5px;
		top:10px;
	}
	.font{
		float: left;
		padding:0px 5px;
		line-height:48px ;
		font-size: 18px;
		color: #fff;
	}
	.app-container{
		padding:0px;
	}
	.Header{
		width:100%;
		height: 48px;
		background-color:#3e3a39;
	}
</style>
