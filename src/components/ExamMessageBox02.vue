<template>
	<div class="exam01">
		<h1>mint-ui组件库第二个组件 messagebox</h1>
		<h1>交互性提示框</h1>
		<button @click="add1" class="pad">警告确认</button>
		<button @click="add2" class="pad">提示确认</button>
		<button @click="add3" >输入确认</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {}
		},
		methods:{
			add1(){
				//console.log(123)
				this.$messagebox({
					title:"你妈死了",
					message:"请到二号树取妈",
				})
			},
			add2(){
				//console.log(123)
				this.$messagebox({
					title:"喝水小助手提醒您",
					message:"宁今天喝水了吗?",
					//显示确认按钮
					showConfirmButton:true,
					//显示关闭按钮
					showCancelButton:true,
				}).then(action=>{
					//回调函数then cancel是点取消返回的结果
					if(action=="cancel"){
						this.$toast({
							message:"不喝水就给爷爬",
							position:"middle",
							duration:1500,
						})
					}else{
						this.$toast({
							message:"一天八杯水,喜+1",
							position:"middle",
							duration:1500,
						})
					}
				})
			},
			add3(){
				//console.log(123)
				this.$messagebox({
					title:"喝水记录",
					message:"宁今天已经喝了几杯水?",
					//显示确认按钮
					showConfirmButton:true,
					//输入问题框
					showInput:true,
					//默认内容
					inputValue:"",
					//文本性质
					inputType:"text",
					//占位符
					inputPlaceholder:"请输入杯数"
				}).then(action=>{
					console.log(action)
				})
			},
		}
	}
</script>

<style>
	h1:first-child{
		color:indianred;
	}
	.pad{
		margin-right:64px;
	}
</style>
