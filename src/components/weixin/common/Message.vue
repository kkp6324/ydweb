<template>
	<div class="rootstyle" @click="itemClick(id)">
		<div class="leftimgandlablestyle">
			<img :src="imgurl" alt="">
			<div class="rightOfImg">
				<span class="titlelable">{{title}}</span>
				<span class="subtitle">{{subtitle}}</span>
			</div>
		</div>
		<span class="sendtime">{{sendtime}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{    //接收父组件数据
		  id:{default:""},
		  imgurl:{default:""},
		  title:{type:String,default:""},
		  subtitle:{type:String,default:""},
		  sendtime:{type:String,default:""},
		  itemClick:{type:Function}
		},
		name:"Message",  //子组件名称
	}
</script>

<style scoped>
	.rootstyle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom:1px solid #d9d9d9;
		background-color: #fff;
	}
	.leftimgandlablestyle>img{
		width: 50px;
	}
	.leftimgandlablestyle{
		display: flex;
		width:100%;
		height: 60px;
		padding:5px;
	}
	.rightOfImg{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.titlelable{
		color:#000;
		font-size:17px;
		margin-left:7px;
	}
	.subtitle{
		margin-left:7px;
		color: gray;
		font-size: 16px;
	}
	.sendtime{
		padding-top: 5px;
		padding-right: 5px;
		align-self: flex-start;
		color:gray;
	}
</style>
