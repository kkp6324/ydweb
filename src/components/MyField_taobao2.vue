<template>
  <div class="container">
		<div class="tipslogin">
			<span>您需要登陆后才能继续访问</span>
			<span class="colseSpan">关闭</span>
		</div>
		<div class="imgDiv">
			<img src="../assets/tblogo.png" class="logo">
		</div>
		<div class="operateDiv">
			<!-- 账号 -->
			<mt-field :placeholder="accountPlaceholder" v-modle="uname"></mt-field>
			<!-- 密码 -->
			<mt-field placeholder="请输入密码" v-modle="upass" type="password" class="myinput"></mt-field>
			<!-- 短信验证码 -->
			<!-- 免费注册 -->
			<mt-button disabled type="primary"  size="large" class="mybutton getCode">
				{{defaultAccountText}}
			</mt-button>
			<!-- 登录和切换登录方式 -->
		</div>
  </div>
</template>
<script>
export default {
    data(){
       return {
				 defaultAccountText:"短信验证码",
				 uname:"",
				 accountPlaceholder:"请输入账号",
         // label:"账户",
       }
    },
		wtach:{
			uname(){},
		},
    created() {
       
    },
    methods: {
      
    },
}
</script>
<style>
		body{background-color: #fff !important;}
    /* 你需要登录才能继续仿问的布局样式 */
    .tipslogin {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 52px;
      background: rgb(238, 238, 238);
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 半闭样式 */
    .closeSpan {
      color: rgb(153, 153, 153)
    }
    /* 图片 logo 根样式 */
    .imgDiv {
      display: flex;
      justify-content: center;
    }
    /* 图片样式 */
    .logo{
      width: 80px;
      height: 80px;
    }
    /* 上面的线隐藏 */
    .mint-cell-wrapper  {
      background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
    }
   /* 输入框底边框样式 */

    /* 修改按钮按钮下的默认颜色 */
    .mint-button::after {
      background-color: transparent;
    }
    /* 操作区域的样式*/
    .operateDiv {
      padding-left: 20px;
      padding-right: 20px;
    }
    /* 输入框边距 */
		.mint-field-core{
			margin-bottom: 0px !important;
		}
    .myinput {
      margin-top: 30px;
    }
    /* 获取短信验证码字体颜色 */
    .getCode {
      color:#ff5000;
      font-size: 17px;
      border-left:1px solid #b5b5b5;
      padding-left: 7px;
    }
    /* 免费注册根样式 */
    .registerDiv {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 免费注册字体样式*/
    .registerDiv span {
      color: #555;
    }
    /* 登录短信验证按钮边距 */
    .mybutton {
      margin-top: 20px;
    }
    /* 修改默认 butoon 的样式 达到和淘宝登录一样 */
    .mint-button--default {
      background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
      border-radius: 25px;
      color: #fff;
      height: 48px;
    }
    /* 同上 */
    .mint-button--primary {
      border-radius: 25px;
      height: 48px;
      background-color: transparent;
      border: 1px solid #ff5000;
      color: #ff5000
    }
    /* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
    .mint-msgbox{
      border-radius: 8px;
      width: 70%
    }
    /* 弹出框内容样式 */
    .mint-msgbox-content {
      min-height: 50px;
      font-size: 18px;
    }
    /* 弹出内容居中 */
    .mint-msgbox-message{
      line-height: 50px;
    }
    /* 弹出框确定按钮样式 */
    .mint-msgbox-btns{
      height: 60px;
    }
    /* 弹出框确定按钮字体 */
    .mint-msgbox-confirm {
      color: #f40;
    }
</style>