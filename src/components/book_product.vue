<template>
	<div class="header">
		<div class="title">
			<div class="left-text">
				<span class="m-title">新书抢鲜</span>
				<span class="sub-title">24小时热销新书</span>
			</div>
			<div class="right-text" @click="more">
				<span class="btn">更多<i class="iconfont icon-icon-test"></i></span>
			</div>
		</div>
		<booklist></booklist>
	</div>
</template>

<script>
	import book_product_list from "./book_product_list.vue";
	export default{
		data(){
			return{
				
			}
		},
		methods: {
			more(){
				window.location.href="http://127.0.0.1:8080/#/BookMall"
			}
		},
		components:{
			"booklist":book_product_list,
		}
	}
</script>

<style scoped>
	.btn{
		font-size: 14px;
		color: #969ba3;
	}
	.title{
		border-top: transparent solid 16px;
		display: flex;
		height: 44px;
		padding:0 16px;
		background-color: #fff;
		justify-content:space-between;
		align-items:center;
	}
	.header{
		margin-top: 12px;
		margin-bottom: 12px;
	}
	.m-title{
		font-size: 16px;
	}
	.m-title::before{
		display: inline-block;
		box-sizing: border-box;
		width: .625rem;
		height: 1em;
		content: '';
		vertical-align: -.22ex;
		color: transparent;
		border-left: 2px solid #ed424b;
	}
	.sub-title{
		font-size:13px;
		margin-left: 8px;
		color: #969ba3;
	}
</style>
