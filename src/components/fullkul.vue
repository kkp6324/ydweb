<template>
	<div class="booksul">
		<a href="#" class="onebook"  v-for="(item,index) of list" :key="index" @click="me(item.fid)">
			<img :src="item.bookimg" class="onebook_img">
			<div class="book_intro">
				<h4 class="book_title">{{item.booktitle}}</h4>
				<p class="book_desc">{{item.bookintroduction}}<div class="book_meta">
					<div class="book_meta_left">
						<span class="book_author">
							<img src="../assets/lianxiren.svg" class="icon_human">{{item.bookwriter}}
						</span>
					</div>
					<div class="book_meta_right">
						<span class="icon_text">
							<em class="tag-small gray">{{item.booktype}}</em>
							<em class="tag-small red">{{item.bookstatus}}</em>
							<em class="tag-small blue">{{item.booknumber}}万字</em>
						</span>
					</div>
				</div>
			</div>
		</a>
		<div @click="load" style="text-align: center;"> <span>加载更多</span></div>
	</div>
 
</template>

<script>
export default {
    data(){
		return{
			list:[],
			pno:0,
			pageSize:8
		}
	},
	methods:{
		me(fid){
			this.$router.push({path:'/ceshi2/'+fid})
		},
		load(){
			this.pno++;
			var url="newfullbook"
			var obj={pno:this.pno,pageSize:this.pageSize}
			this.axios.get(url,{params:obj})
			.then(result=>{
			    var rows=this.list.concat(result.data.data)
				this.list=rows;
		    })
		},
	},
	created(){
		this.load();
	},
}


</script>
<style scoped>
*{
	margin:0;
	padding:0;
}
.booksul{
	padding-top:44px;
	background-color: #fff;
}
.onebook{
	position: relative;
    display: block;
    overflow: hidden;
    padding: 16px;
    transition: padding-left .15s;
}
a{
    text-decoration: none;
    color: inherit;
    outline: 0;
}
.onebook_img{
	font-size: 0;
    float: left;
    width: 66px;
    height: 88px;
    margin-right: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
}
.book_intro{
	overflow: hidden;
}
.book_title{
	line-height: 1.4;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
	font-size: 100%;
}
p{
	word-break: break-all;
}
.book_desc{
	line-height: 19px;
    display: -webkit-box;
    height: 36px;
	font-size: 14px;
    overflow: hidden;
    margin: 6px 0;
    color: #969ba3;
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 2;    
}
.book_meta{
	font-size: .75rem;
    overflow: hidden;
}
.book_meta_left{
	float: left;
}
.book_author{
	font-size: .8125rem;
    display: block;
    overflow: hidden;
    max-width: calc(100vw - 2rem - (176rem / 16));
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #969ba3;
}
.icon_human{
	font-size: .75rem;
    margin-right: 3px;
    vertical-align: -.15ex;
	width: 15px;
    height: 15px;
	fill: currentColor;
	overflow: hidden;
	color: #969ba3;
}
.book_meta_right{
	position: relative;
    float: right;
	font-size: .75rem;
}
.icon_text{
	position: absolute;
    top: -3px;
    right: 0;
    white-space: nowrap;
	display: inline-block;
	transform-origin: right center;	
}
.icon_text > .tag-small:first-child{
	margin-left: 0;
}
.tag-small{
	transform-origin: right center;
}   
.gray {
    color: #969ba3;
}
.tag-small{
    font-size: 6px;
    line-height: 1.2;
    display: inline-block;
    margin: 0 -3px;
    padding: 0 6px;
    transform: scale(0.9);
    vertical-align: bottom;
}
em {
    font-style: normal;
}
.tag-small:before{
	position: absolute;
    z-index: -1;
    top: -2px;
    right: 3px;
    bottom: -1px;
    left: 3px;
    content: '';
    opacity: .5;
    border: 1px solid;
    border-radius: .11111em;
}
.red{
	color:#ed424b;
}
.blue{
	color:#4284ed;
}
</style>

