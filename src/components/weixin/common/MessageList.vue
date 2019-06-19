<!-- 读取messagelist.json -->
<template>
	<div>
		<Message
		class="itemstyle"
		v-for="(item,index) of datas.data"
		:key="index"
		:id="item.id"
		:title="item.title"
		:subtitle="item.subtitle"
		:sendtime="item.time"
		:imgurl="require('../../../assets/a_7.png')"
		:itemClick="clickitem"
		></Message>
	</div>
</template>

<script>
	//负责引入message子组件
	//引入messagelist.json
	import messagejson from "../json/messagelist.json";
	import Message from "./Message.vue";
	export default{
		data(){
			return {
				datas:messagejson
			}
		},
		methods:{
			clickitem(n){
				console.log(n);
			}
		},
		name:"MessageList",
		props:{
			
		},
		components:{
			"Message":Message,
		}
	}
</script>
<style scoped>
</style>
