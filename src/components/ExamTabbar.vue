<template>
	<div class="container">
		<h3>底部选项卡</h3>
		<!-- 面板 -->
	<mt-tab-container class="page-tabbar-container" v-model="selected">
		<mt-tab-container-item id="外卖">
		  <mt-cell v-for="n in 10" title="餐厅" :key="n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item id="订单">
		  <mt-cell v-for="n in 6" title="订单" :key="n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item id="发现">
		  <mt-cell v-for="n in 10" title="发现" :key="n"></mt-cell>
		</mt-tab-container-item>
		<mt-tab-container-item id="我的">
		  <mt-cell v-for="n in 5" title="我的" :key="n"></mt-cell>
		</mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/100x100.png" />
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/100x100.png" />
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/100x100.png" />
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/100x100.png" />
        我的
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
		methods:{
			
		}
	}
</script>

<style>
</style>
