<template>
<body>
	<div class="login-wrap">
        <div class="login-form">
            <ul class="form-list">
                <li>
					<input type="text" id="uname" placeholder="请输入个性账号">
				</li>
                <li>
					<input type="password" id="upwd" placeholder="请输入密码">
                </li>
            </ul>
        </div>
        <div class="reg-wrap cf">
            <a class="link" href="#">忘记密码</a>
            <a class="link fr" href="http://127.0.0.1:8080/#/registered">用户注册</a>
        </div>
        <div class="btn-wrap">
            <a class="btn-primary large login-button disabled" href="#" @click="login">登录</a>
        </div>
    </div>
</body>
</template>

<script>
export default {
    data(){
		return{
			list:[]	
		}
	},
	methods: {
		login() {
			var uname=document.getElementById("uname").value;
			var upwd=document.getElementById("upwd").value;
			if(uname==""||upwd==""){
				this.$messagebox({
					title:"消息提示",
					message:"账号或密码为空",
				})
			}else{
				var url="userlogin";
				var obj={uname:uname,upwd:upwd};
				this.axios.get(url,{params:obj}).then(result=>{
					if(result.data.data==""){
						this.$messagebox({
							title:"消息提示",
							message:"账号或密码错误",
						})
						return;
					}else{
						this.$toast({
							message:"登录成功跳转主页",
							position:"middle",
							duration:1500,
						})
						sessionStorage.setItem("name",uname);
						sessionStorage.setItem("upwd",upwd);
						setTimeout(function(){location.href="http://127.0.0.1:8080/#/"},3000)
					}
				  })
			}
		}
	},
}


</script>
<style scoped>
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


