<template>
	<div class="container">
		<!-- 面板 -->
	<!-- <mt-tab-container class="page-tabbar-container" v-model="selected">
		<mt-tab-container-item :id="meg1">
		  <mt-cell v-for="n in 1" :title="meg1" :key="n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item :id="meg2">
		  <mt-cell v-for="n in 6" :title="meg2" :key="n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item :id="meg3">
		  <mt-cell v-for="n in 10" :title="meg3" :key="n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item :id="meg4">
		  <mt-cell v-for="n in 5" :title="meg4" :key="n"></mt-cell>
		</mt-tab-container-item>
    </mt-tab-container> -->
	<!-- 下部导航栏 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item :id="meg1">
        <img slot="icon" :src="img_url1"/>
        {{meg1}}
      </mt-tab-item>
      <mt-tab-item :id="meg2">
        <img slot="icon" :src="img_url2"/>
        {{meg2}}
      </mt-tab-item>
      <mt-tab-item :id="meg3">
        <img slot="icon" :src="img_url3"/>
        {{meg3}}
      </mt-tab-item>
      <mt-tab-item :id="meg4">
        <img slot="icon" :src="img_url4"/>
        {{meg4}}
      </mt-tab-item>      
    </mt-tabbar>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				selected:"外卖"
			}
		},
		name:"Tabbar",  //子组件名称
		props:{    		//接收父组件数据
		  meg1:{default:""},//meg默认字符串
		  meg2:{default:""},
		  meg3:{default:""},
		  meg4:{default:""},
		  img_url1:{default:""},
		  img_url2:{default:""},
		  img_url3:{default:""},
		  img_url4:{default:""},
		  add:{type:Function}//函数
		},
		methods:{
		}
	}
</script>

<style >
	.mint-tab-container-item{
		overflow:auto;
	}
	.mint-tab-item-icon{
		width: 30px !important;
		height: 30px !important;
	}
	.mint-tab-item-icon>img{
		width: 30px;
		height: 30px;
	}
	a{
		color: #999 !important;
	}
	.is-selected {
    background-color: #fcfcfc !important;
    color: #45c018 !important;
	}
</style>
