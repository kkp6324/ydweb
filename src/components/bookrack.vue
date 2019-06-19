<template>
<body>
	<div>
        <div class="top">
			<img src="../assets/返回.svg" class="back" @click="back">
			<div class="my_book">我的书架</div>
		</div>
	</div>
	<div>
		<div class="book-layout" v-for="(item,index) of list" :key="index">
			<img :src="item.bookimg"  class="book-cover">
			<div class="book-cell">
				<h2 class="title">{{item.booktitle}}</h2>
				<div class="book-rand-a">{{item.bookwriter}}</div>
				<p class="book-meta">{{item.booktype}}</p>
				<p class="book-meta">{{item.booknumber}}万字</p>
				<div class="btn-normal red" @click="mfsd">开始阅读</div>
				<div class="btn-normal white" @click="del_mybook(item.mybid)">删除</div>
			</div>
		</div>
	</div>
</body>
</template>

<script>
export default {
    data(){
		return{
			list:[],
		}
	},
	methods: {
		back(){
			location.href="http://127.0.0.1:8080/#/"
		},
		mfsd(){
			this.$toast({
				message:"暂时还未上架,请耐心等待",
				position:"middle",
				duration:1500,
			})
		},
		del_mybook(e){
			console.log(e)
			var mybid=e;
			this.$messagebox({
				title:"消息提示",
				message:"是否删除?",
				showConfirmButton:true,
				showCancelButton:true,
			}).then(action=>{
				if(action=="cancel"){
					return
				}else{
					this.$toast({
						message:"已删除",
						position:"middle",
						duration:1500,
					})
					setTimeout(function(){
						history.go(0) 
					},1500)
					var url = "delmybook";
					var obj = {mybid:mybid}
					this.axios.get(url,{params:obj})
					.then(result=>{
						console.log(result)
					})
				}
			})
			
		}
	},
	mounted(){
		this.axios.get("selectmybook")
		.then(result=>{
			this.list=result.data.data;
		})
	},
}
</script>
<style scoped>
	.my_book{
		text-align: center;
		background-color:#fff;
		margin:10px auto;
		width:90px;
		border-radius:5px;
		color:#ed424b;
		border: 1px solid #ed424b;
	}
	.back{
		position: absolute;
		padding:5px;
		width:16px;
	}
	.top{
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #ddd;
	}
	
	
		.m-p{
			transform: scale(0.8);
			color:#969ba3;
		}
		.book-pay{
		    position: relative;
			display: block;
			padding: .75rem 0 .5rem;
			text-align: center;
		}
		.btn-group-cell p{
			font-size: 12px;
			color:#33373d;
			margin: 0;
		}
		.btn-group-cell{
			font-size: 100%;
			font-weight: 400;
			display: table-cell;
		}
		.btn-group{
			padding: 0;
			margin: 0;
			list-style: none;
			display: table;
			width: 100%;
			margin-right: auto;
			margin-left: auto;
			table-layout: fixed;
		}
		.module{
			margin: .75rem 0;
			background-color: #fff;
		}
		.book-summary-more{
			transform: rotate(270deg);
			position: absolute;
			right: 9px;
			bottom: -9px;
			padding:10px;
			background-color: #fff;
		}
		.book-summary content{
			display: block;
		}
		.book-summary.enabled{
			height: 5.92rem;
			max-height: none;
		}
		.book-summary{
			font-size: .875rem;
			line-height: 1.5rem;
			position: relative;
			overflow: hidden;
			max-height: 5.92rem;
			margin-left: 1rem;
			padding-right: 1rem;
			text-align: justify;
			border-top: 1rem solid transparent;
			border-bottom: 1rem solid transparent;
			box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
		}
		.white{
			border:1px solid #ddd;
			color: #33373d;
			background-color:#fff;
		}
		.red{
			margin-right: 10px;
			color: #fff;
			background-color:#ed424b;
		}
		.btn-normal{
			text-decoration: none;
			font-size: .8125rem;
			line-height: 24px;
			display: inline-block;
			padding: 0 1rem;
			text-align: center;
			border-radius: .125rem;
		}
		.book-meta{
			font-size: .75rem;
			overflow: hidden;
			margin: 0;
			color: #33373d;
		}
		.tag-solid{
			left:145px;
			background-color:#f0643a;
			padding:0 5px;
			margin:0 3px;
			color:#fff;
			font-size: 13px;
			position: absolute;
			transform: scale(0.6);
		}
		.book-rand-a{
			font-size: 13px;
			color: #33373d;
		}
		.book-cell>.title{
			margin:0;
			font-size: 100%;
			line-height: 1.4;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.book-cell{
			line-height: 1.4rem;
			overflow: hidden;
		}
		.book-cover{
			width: 5.25rem;
			height: 7rem;
			border-radius:2px;
			box-shadow: none;
			font-size: 0;
			float: left;
			margin-right:15px;
		}
		.book-layout{
			position: relative;
			display: block;
			overflow: hidden;
			padding: 1rem;
			transition: padding-left .15s;
			border-bottom:1px solid #ddd;
		}
		.back{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			padding:14px;
		}
		.book-titel{
			font-size: .875rem;
			font-weight: 400;
			line-height: 1.375rem;
			position: absolute;
			left: 2.6875rem;
			overflow: hidden;
			max-width: 60%;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.header{
			position: relative;
			box-sizing: border-box;
			height: 2.75rem;
			padding-top: 11px;
			padding-bottom:10px;
		}
</style>

