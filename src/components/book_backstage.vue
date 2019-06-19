<template>
	<div class="book-bas">
		<h3>图书后台系统</h3>
		bookimg<input type="text" id="bookimg"><br>
		booktitle<input type="text" id="booktitle" onchange="javascript:if(!/^[\u4e00-\u9fa5]+$/gi.test(this.value))alert('含有非汉字字符');"><br>
		bookwriter<input type="text" id="bookwriter" onchange="javascript:if(!/^[\u4e00-\u9fa5]+$/gi.test(this.value))alert('含有非汉字字符');"><br>
		booktype<input type="text" id="booktype" onchange="javascript:if(!/^[\u4e00-\u9fa5]+$/gi.test(this.value))alert('含有非汉字字符');"><br>
		bookstatus<input type="text" id="bookstatus" onchange="javascript:if(!/^[\u4e00-\u9fa5]+$/gi.test(this.value))alert('含有非汉字字符');"><br>
		booknumber<input type="text" id="booknumber"><br>
		bookintroduction<input type="text" id="bookintroduction"><br>
		<input type="submit" @click="input">
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				bookimg:"null"
			}
		},
		watch:{
			message2(){}
		},
		methods:{
			input(){
				var booktitle=document.getElementById("booktitle").value;
				var bookimg=document.getElementById("bookimg").value;
				var bookwriter=document.getElementById("bookwriter").value;
				var booktype=document.getElementById("booktype").value;
				var bookstatus=document.getElementById("bookstatus").value;
				var booknumber=document.getElementById("booknumber").value;
				var bookintroduction=document.getElementById("bookintroduction").value;
				console.log(booktitle,bookimg,bookwriter,booktype,bookstatus,booknumber,bookintroduction)
				var url = "bookbackstage";
				//3:创建参数对象
				var obj = {
					bookimg:bookimg,
					booktitle:booktitle,
					bookwriter:bookwriter,
					booktype:booktype,
					bookstatus:bookstatus,
					booknumber:booknumber,
					bookintroduction:bookintroduction,
					};
				//4:发送ajax 15:45
				this.axios.get(url,{params:obj}).then(result=>{
				  this.list = result.data.data;
				  alert("输入成功")
				})
			}
		}
	}
</script>

<style>
</style>
