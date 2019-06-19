<template>
<div>
	<Header></Header>
	<booklist></booklist>
	<fullbook></fullbook>
	<product></product>
</div>
</template>

<script>
	import SQ_header from "./SQ_header.vue";
	import product from "./product.vue";
	import book_product from "./book_product.vue";
	import full_book from "./full_book.vue";
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"Header":SQ_header,
			"product":product,
			"booklist":book_product,
			"fullbook":full_book,
			
		},
		methods: {
		},
	}
</script>

<style>
	.app-container{
		padding-bottom: 0px;
	}
	body{
		margin:0px !important;
	}
</style>
