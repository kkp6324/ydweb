<template>
<body>
	<div class="header">
        <div class="top">
			<img src="../assets/返回.svg" class="back" @click="back">
		</div>
		<div class="tow">
			<img src="../assets/user.png" class="user-img">
		</div>
		<div class="three">
			用户:{{uname}}
		</div>
	</div>
	<div class="logout">
		<div class="logout-1" @click="logout">退出登陆</div>
	</div>	
</body>
</template>

<script>
export default {
    data(){
		return{
			uname:`${sessionStorage.getItem("name")}`
		}
	},
	methods: {
		back(){
			location.href="http://127.0.0.1:8080/#/"
		},
		logout(){
			sessionStorage.removeItem("name");
			sessionStorage.removeItem("upwd");
			location.href="http://127.0.0.1:8080/#/";
		}
	}
}
</script>
<style scoped>
	.three{
		margin-top: 5px;
		text-align: center;
		color: #fff;
		font-size: 24px;
	}
	.logout-1{
		color:#fff;
		line-height: 40px;
		width:70%;
		height: 40px;
		background-color: #ffa94d;
		border-radius: 20px;
		margin:60px auto;
	}
	.logout{
		text-align: center;
	}
	.user-img{
		margin-top: 50px;
		border-radius: 50%;
	}
	.tow{
		text-align: center;
	}
	.back{
		width:24px;
		margin:8px 0 0 5px;
	}
	.top{
		width: 100%;
		height: 40px;
		background-color: #ffa94d;
	}
	.header{
		width: 100%;
		height: 250px;
		background-color:#ffa94d;
	}
</style>


