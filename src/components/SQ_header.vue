<template>
	<div>
		<div class="header">
			<h1 class="logo">
				<span class="one-img"><img src="../assets/sq_logo.png" style="width: 100%;"></span>
				<span class="tow-img"><img src="../assets/shuqixiaoshuo.png" style="width: 100%;"></span>
			</h1>
			<ul class="items">
				<li><img src="../assets/user.png"  style="width: 100%;" @click="user"></li>
				<li><img src="../assets/书架.svg" style="width: 100%;" @click="bookrack"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				uname:"",
			}
		},
		methods: {
			bookrack(){
				var n=sessionStorage.getItem("name");
				this.uname=n;
				if(n){
					location.href="http://127.0.0.1:8080/#/bookrack"
				}else{
					location.href="http://127.0.0.1:8080/#/Login"
				}
			},
			user(){
				var n=sessionStorage.getItem("name");
				this.uname=n;
				if(n){
					location.href="http://127.0.0.1:8080/#/user"
				}else{
					location.href="http://127.0.0.1:8080/#/Login"
				}
			}
		}
	}
</script>

<style scoped>
	.items>li{
		width: 24px;
		height: 24px;
		margin: 10px 16px 0 0;
		float: left;
	}
	.items{
		padding: 0;
		margin: 0;
		float: right;
		font-size: 0;
		list-style: none;
	}
	.header{
		height: 44px;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #f3f3f3;
	}
	.logo{
		margin: 0;
		display: inline-block;
		margin-left: 16px;
		margin-top:10px;
		color: #333;
		font-size: .36rem;
	}
	.one-img{
		display: inline-block;
		margin-right:8px;
		width: 25px;
		height:25px;
		vertical-align: middle;
	}
	.tow-img{
		display: inline-block;
		width:72.500px;
		height:16px;
		vertical-align: middle;
	}
</style>
