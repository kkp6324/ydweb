<template>
	<div>
		<div class="header" @click="back">
			<img src="../assets/返回.svg" class="back">
			<span class="book-titel">{{list.booktitle}}</span>
		</div>
		<div class="book-layout">
			<img :src="list.bookimg"  class="book-cover">
			<div class="book-cell">
				<h2 class="title">{{list.booktitle}}</h2>
				<div class="book-rand-a">{{list.bookwriter}}</div>
				<p class="book-meta">{{list.booktype}}</p>
				<p class="book-meta">{{list.booknumber}}万字</p>
				<div class="btn-normal red" @click="mfsd">免费试读</div>
				<div class="btn-normal white" @click="add_book_list">加入书架</div>
			</div>
		</div>
		<section class="book-summary enabled" id="d1">
			<content>
				{{list.bookintroduction}}
				<img src="../assets/返回.svg" style="transform: rotate(90deg);float: right;margin-top: 5px;margin-right: 5px;display: none;" @click="more_back">
			</content>
			<img src="../assets/返回.svg" class="book-summary-more" @click="more">
		</section>
		<div class="module">
			<ul class="btn-group">
				<li class="btn-group-cell">
					<div class="book-pay" @click="c_month">
						<img src="../assets/月票.svg">
						<p>投月票</p>
						<p class="m-p" :v-model="month">{{month}}票·第28位</p>
					</div>
				</li>
				<li class="btn-group-cell" @click="c_recommend">
					<div class="book-pay">
						<img src="../assets/推荐.svg">
						<p>推荐</p>
						<p class="m-p" :v-model="recommend">{{recommend}}票·第65位</p>
					</div>
				</li>
				<li class="btn-group-cell" @click="c_reward">
					<div class="book-pay">
						<img src="../assets/打赏.svg" width="34px">
						<p>打赏</p>
						<p class="m-p" :v-model="reward">本周{{reward}}人打赏</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				month:100,
				recommend:12536,
				reward:30,
				list:[],
			}
		},
		mounted(){
			//发起异步请求
			var id=this.$route.params.id;
			var url="minute2";
			var obj={fid:id}
			this.axios.get(url,{params:obj})
			.then(result=>{
				this.list=result.data.data[0];
			})
		},
		methods: {
			add_book_list(){
				var bookimg=this.list.bookimg;
				var booktitle=this.list.booktitle;
				var bookwriter=this.list.bookwriter;
				var booktype=this.list.booktype;
				var booknumber=this.list.booknumber;
				var url = "addmybook";
				var obj = {
					bookimg:bookimg,
					booktitle:booktitle,
					bookwriter:bookwriter,
					booktype:booktype,
					booknumber:booknumber,
					};
				//4:发送ajax 15:45
				this.axios.get(url,{params:obj}).then(result=>{
				  console.log(result.data.msg)
				})
			},
			c_reward(){
				this.$messagebox({
					title:"消息提示",
					message:"确定打赏?",
					showConfirmButton:true,
					showCancelButton:true,
				}).then(action=>{
					if(action=="cancel"){
						return
					}else{
						this.$toast({
							message:"已打赏",
							position:"middle",
							duration:1500,
						})
						this.reward++;
					}
				})
			},
			c_recommend(){
				this.$toast({
					message:"操作成功",
					position:"middle",
					duration:1500,
				})
				this.recommend++
			},
			c_month(){
				this.$messagebox({
					title:"消息提示",
					message:"确定要投月票吗?",
					showConfirmButton:true,
					showCancelButton:true,
				}).then(action=>{
					if(action=="cancel"){
						return
					}else{
						this.$toast({
							message:"已投票",
							position:"middle",
							duration:1500,
						})
						this.month++;
					}
				})
			},
			more_back(){
				document.getElementById("d1").style.height="5.92rem";
				document.querySelector(".book-summary-more").style.display="block";
				document.querySelector("content>img").style.display="none";
			},
			more(){
				document.getElementById("d1").style.height="auto";
				document.querySelector(".book-summary-more").style.display="none";
				document.querySelector("content>img").style.display="block";
			},
			back() {
				location.href="/#/fullBookMall"
			},
			mfsd(){
				this.$toast({
					message:"暂时还未上架,请耐心等待",
					position:"middle",
					duration:1500,
				})
			},
		},
	}
</script>

<style scoped>
	.m-p{
		transform: scale(0.8);
		color:#969ba3;
	}
	.book-pay{
	    position: relative;
		display: block;
		padding: .75rem 0 .5rem;
		text-align: center;
	}
	.btn-group-cell p{
		font-size: 12px;
		color:#33373d;
		margin: 0;
	}
	.btn-group-cell{
		font-size: 100%;
		font-weight: 400;
		display: table-cell;
	}
	.btn-group{
		padding: 0;
		margin: 0;
		list-style: none;
		display: table;
		width: 100%;
		margin-right: auto;
		margin-left: auto;
		table-layout: fixed;
	}
	.module{
		margin: .75rem 0;
		background-color: #fff;
	}
	.book-summary-more{
		transform: rotate(270deg);
		position: absolute;
		right: 9px;
		bottom: -9px;
		padding:10px;
		background-color: #fff;
	}
	.book-summary content{
		display: block;
	}
	.book-summary.enabled{
		height: 5.92rem;
		max-height: none;
	}
	.book-summary{
		font-size: .875rem;
		line-height: 1.5rem;
		position: relative;
		overflow: hidden;
		max-height: 5.92rem;
		margin-left: 1rem;
		padding-right: 1rem;
		text-align: justify;
		border-top: 1rem solid transparent;
		border-bottom: 1rem solid transparent;
		box-shadow: 0 1px #f0f1f2, 0 -1px #f0f1f2;
	}
	.white{
		border:1px solid #ddd;
		color: #33373d;
		background-color:#fff;
	}
	.red{
		margin-right: 10px;
		color: #fff;
		background-color:#ed424b;
	}
	.btn-normal{
		text-decoration: none;
		font-size: .8125rem;
		line-height: 24px;
		display: inline-block;
		padding: 0 1rem;
		text-align: center;
		border-radius: .125rem;
	}
	.book-meta{
		font-size: .75rem;
		overflow: hidden;
		margin: 0;
		color: #33373d;
	}
	.tag-solid{
		left:145px;
		background-color:#f0643a;
		padding:0 5px;
		margin:0 3px;
		color:#fff;
		font-size: 13px;
		position: absolute;
		transform: scale(0.6);
	}
	.book-rand-a{
		font-size: 13px;
		color: #33373d;
	}
	.book-cell>.title{
		margin:0;
		font-size: 100%;
		line-height: 1.4;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.book-cell{
		line-height: 1.4rem;
		overflow: hidden;
	}
	.book-cover{
		width: 5.25rem;
		height: 7rem;
		border-radius:2px;
		box-shadow: none;
		font-size: 0;
		float: left;
		margin-right:15px;
	}
	.book-layout{
		position: relative;
		display: block;
		overflow: hidden;
		padding: 1rem;
		transition: padding-left .15s;
	}
	.back{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		padding:14px;
	}
	.book-titel{
		font-size: .875rem;
		font-weight: 400;
		line-height: 1.375rem;
		position: absolute;
		left: 2.6875rem;
		overflow: hidden;
		max-width: 60%;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.header{
		position: relative;
		box-sizing: border-box;
		height: 2.75rem;
		padding-top: 11px;
		padding-bottom:10px;
	}
</style>