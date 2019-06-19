<template>
<body>
	<div class="login-wrap">
        <div class="login-form">
            <ul class="form-list">
                <li>
					<input type="text" id="uname" placeholder="3-6个字符">
				</li>
                <li>
					<input type="password" id="upwd" placeholder="3-6个字符">
                </li>
				<li>
					<input type="password" id="upwd2" placeholder="请确认密码">
				</li>
            </ul>
        </div>
        <div class="reg-wrap cf">
            <a class="link" href="#">忘记密码</a>
            <a class="link fr" href="http://127.0.0.1:8080/#/Login">已有账号</a>
        </div>
        <div class="btn-wrap">
            <a class="btn-primary large login-button disabled" href="#" @click="registered">注册</a>
        </div>
    </div>
</body>
</template>

<script>
export default {
    data(){
		return{
			list:[],
			state:"",
		}
	},
	methods:{
		registered(){
			var uname=document.getElementById("uname").value;
			var upwd=document.getElementById("upwd").value;
			var upwd2=document.getElementById("upwd2").value;
			var yes=document.getElementsByClassName("yes");
			var no=document.getElementsByClassName("no");
			var nreg=/^[A-Za-z0-9]{3,16}$/;
			var preg=/^[A-Za-z0-9]{6,16}$/;
			console.log(preg.test(upwd));
			if(nreg.test(uname)==false){
				this.$toast({
					message:"账号格式错误",
					position:"middle",
					duration:1500,
				})
				return;
			}
			if(preg.test(upwd)==false){
				this.$toast({
					message:"密码格式错误",
					position:"middle",
					duration:1500,
				})
				return;
			}
			// if(uname==""){
			// 	this.$messagebox({
			// 		title:"消息提示",
			// 		message:"账号不能为空",
			// 	})
			// 	return;
			// }
			// if(upwd==""){
			// 	this.$messagebox({
			// 		title:"消息提示",
			// 		message:"密码不能为空",
			// 	})
			// 	return;
			// }
			if(upwd!=upwd2){
				this.$messagebox({
					title:"消息提示",
					message:"密码不一致",
				})
			}else{
				var url="userregistered";
				var obj={uname:uname,upwd:upwd};
				this.axios.get(url,{params:obj}).then(result=>{
				  this.list = result.data.data;
				  this.$toast({
				  	message:"注册成功",
				  	position:"middle",
				  	duration:1500,
				  })
					setTimeout(function(){location.href="http://127.0.0.1:8080/#/Login"},1500)
				})
			}
		},
	},
}
</script>
<style scoped>
.no{
	position: absolute;
	width: 12px;
	height: 12px;
	bottom: 14px;
	right: -20px;
	border-radius: 50%;
	background-color: #ff6b6b;
}
.yes{
	position: absolute;
	width: 12px;
	height: 12px;
	bottom: 14px;
	right: -20px;
	border-radius: 50%;
	background-color: #51cf66;
}
.login-wrap{
    position:fixed;
    height:100%;
    width:100%;
    font-size: 12px;
    background-color:#fff;
}

* {
    box-sizing: border-box;
}
div {
    display: block;
}
.login-form{
    padding: 0 32px ;
    margin-top:48px
}
ul,li{
    list-style: none outside none;
    margin: 0;
    padding: 0;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.login-form .form-list li{
    width: 100%;
    position: relative;
    z-index: 1;
    border-bottom: 1px solid #EEE;
    margin-bottom: 16px;
}
.form-list input{
    display: inline-block;
    vertical-align: middle;
    height: 46px;
    line-height: 46px;
    width: 100%;
    background: none;
    font-size: 15px;
    
}
input{
    border: none!important;
    outline: none!important;
    color: inherit;
    font: inherit;
    margin: 0;
    cursor: text;
    -webkit-writing-mode: horizontal-tb !important;
    margin-bottom: 0px!important;
    padding: 0 0 0 50px!important;
}
input::-webkit-input-placeholder{
    color:#D1D1D1;
}
.cf {
    zoom: 1;
}
.reg-wrap {
    padding: 0 32px;
    margin-bottom: 24px;
}
.cf:before, .cf:after {
    display: table;
    content: '';
}
a.link {
    color: #0091DE !important;
}
a {
    background: transparent;
    text-decoration: none;
    color: #61708F;
}
a {
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
}
.fr {
    float: right;
}
.cf:after {
    clear: both;
}
.btn-wrap {
    padding: 0 32px;
    text-align: center;
}
.btn-primary.large.disabled {
    opacity: .7;
}
.btn-primary {
    background: linear-gradient(to right, #EE434C, #F14B4E);
}
.btn-primary.large {
    width: 100%;
    height: 48px;
    border-radius: 40px;
    line-height: 48px;
    font-size: 16px;
}
.btn-primary {
    position: relative;
    z-index: 1;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: #FFF;
}
</style>

