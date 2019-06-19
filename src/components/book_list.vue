<template>
    <div class="books_list">
        <ul class="books_list1">
            <li class="book" v-for="(item,index) of list" :key="index">
                <a href="#">
                    <div class="book-cover">
                        <img :src="item.bookimg" class="book-cover-img">
                    </div>
                    <div class="book-title">{{item.booktitle}}</div>
                    <div class="book-author">{{item.bookwriter}}</div>
                </a>
            </li>
        </ul>
		<div class="link" @click="load">
			<span class="link-text">换一换</span>
			<span class="rotate"></span>
		</div>
    </div>
    
</template>
<script>

export default {
    data(){
		return{
			list:[],
			pno:0,
			pageSize:4
		}
	},
	methods:{
		load(){
			this.pno++;
			var url="boutiquebook"
			var obj={pno:this.pno,pageSize:this.pageSize}
			this.axios.get(url,{params:obj})
			.then(result=>{
				this.list=result.data.data;
		    })
			if(this.list.length<4){
				this.pno=1;
			}
		},
        linkNext(){
            console.log("换一下")
        }
	},
	created(){
		this.load();
	},
}
</script>
<style scoped>
.link{
    background: #fff;
    width: 100%;
    height: 48px;
    line-height: 48px;
    color: #333;
    font-size: 16px;
    vertical-align: middle;
    display: inline-block;
    text-align: center;
}
.link-text{
    line-height: 48px;
    color: #333;
    font-size: 16px;
     text-align: center;
}
.rotate{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-image: url(../assets/rotate.png);
    background-size: 12px;
    margin-left: 4px;
    vertical-align: middle;
}
.books_list{
    list-style:none;
    background: #fff
}
.books_list1{
    margin: 0;
    text-align: center;
    padding: 16px 0 16px 16px;
    display: block;
    overflow: hidden;
    list-style:none;
}
.book{
	box-sizing: border-box;
    width: 25%;
    display: inline-block;
    margin: 0;
    padding-right: 16px;
    float: left;
}
a{
    text-decoration: none;
    color: #333;
}
.book-cover{
    display: -webkit-box;
    width: 100%;
    padding-top: 133.33333%;
    position: relative;
    overflow: hidden;
}
.book-cover:before{
    content: ' ';
    display: inline-block;
    position: absolute;
    box-sizing: border-box;
    border: .01rem solid rgba(0,0,0,.1);
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    z-index: 2;
}
.book-cover-img{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    min-width: 100%;
    min-height: 100%;
    height: 100%;
}
.book-title,.book-author{
    color: #333;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    display: block;
    line-height: 16px;
    height: 30px;
    text-align: left;
    font-size: 13px;    
}
.book-title{
    margin: 8px 0 2px;
}
.book-author{
    color: #999;
}
</style>