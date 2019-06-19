<template>
	<div>
		<mt-swipe :auto="2000">
			<mt-swipe-item ><img src="../assets/轮播2.jpg"></mt-swipe-item>
			<mt-swipe-item ><img src="../assets/轮播3.jpg"></mt-swipe-item>
			<mt-swipe-item ><img src="../assets/轮播4.jpg"></mt-swipe-item>
			<mt-swipe-item ><img src="../assets/轮播5.jpg"></mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script>
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'
export default{
	components: {
		'mt-swipe': Swipe,
		'mt-swipe-item': SwipeItem
	},
	data () {
		return {

		}
	}
}
</script>

<style scoped>
img{
	width: 100%;
	height: 100%;
}
.mint-swipe{
	margin:10px 16px 0px 16px;	
	height:110px;
}
</style>