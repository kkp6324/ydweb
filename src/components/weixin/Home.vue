<script src="common/TitleBar"></script>
<template>
	<div class="page-tabbar">
		<div class="page-wrap">
			<TitleBar 
			meg="微信(11)" 
			:img_url="require('../../assets/ic_search.png')" 
			:img_url2="require('../../assets/ic_add.png')"
			:mysearch="sousuoaa"
			:myadd="plusbb"
			>
			</TitleBar>
			<!-- div:保留出标题的48px -->
			<mt-tab-container class="page-tabbar-container" v-model="active">
				<mt-tab-container-item id="message">
					<MessageList></MessageList>
				</mt-tab-container-item>
			</mt-tab-container>
			
			
			
			<mt-tabbar v-model="active" fixed>
				<mt-tab-item id="message" @click.native="message(0)">
					 <TabBarIcon
					  :selectedImage="require('../../assets/ic_weixin_normal.png')"
					  :normalImage="require('../../assets/ic_weixin_selected.png')"
					  :focused="this.currentIndex[0].isSelect"
					  >
					 </TabBarIcon>微信
				</mt-tab-item>
				<mt-tab-item id="contact" @click.native="message(1)">
					 <TabBarIcon
					  :selectedImage="require('../../assets/ic_contacts_normal.png')"
					  :normalImage="require('../../assets/ic_contacts_selected.png')"
					  :focused="this.currentIndex[1].isSelect">
					 </TabBarIcon>通讯录
					</mt-tab-item>
				<mt-tab-item id="find" @click.native="message(2)">
					 <TabBarIcon
					  :selectedImage="require('../../assets/ic_find_normal.png')"
					  :normalImage="require('../../assets/ic_find_selected.png')"
					  :focused="this.currentIndex[2].isSelect">
					 </TabBarIcon>发现
					</mt-tab-item>
				<mt-tab-item id="me" @click.native="message(3)">
					 <TabBarIcon
					  :selectedImage="require('../../assets/ic_me_normal.png')"
					  :normalImage="require('../../assets/ic_me_selected.png')"
					  :focused="this.currentIndex[3].isSelect">
					 </TabBarIcon>我
				</mt-tab-item>
		  </mt-tabbar>
		</div>
	</div>
</template>
<script>
//引入子组件
//1:引入
//2:注册
//3:调用子组件
//4:传值
import TabBarIcon from "./common/TabBarIcon.vue";
import MessageList from "./common/MessageList.vue";
import TitleBar from "./common/TitleBar.vue";
export default {
  data(){
    return {
		active:"message",
		currentIndex:[
			{isSelect:false},
			{isSelect:true},
			{isSelect:true},
			{isSelect:true}
		]
	}
  },
  methods: {
    sousuoaa(){
		console.log("搜索")
    },
	plusbb(){
		console.log("+")
	},
	message(n){
		for(var i=0;i<this.currentIndex.length;i++){
			if(n==i){
				this.currentIndex[i].isSelect=false;
			}else{
				this.currentIndex[i].isSelect=true;
			}
		}
	}
  },
  components:{
	"TabBarIcon":TabBarIcon,
	"MessageList":MessageList,
    "TitleBar":TitleBar,
  }
}
</script>
<style scoped>
	.mint-tabbar > .mint-tab-item{
		background-color: #fff !important;
	}
	a{
		color:gray;
	}
	.is-selected{
		color:#45C018 !important;
	}
	.mint-tab-item-label{
	}
	.page-tabbar{
		overflow:hidden;
	}
	.page-wrap{
		overflow: auto;
		padding-bottom: 60px;
	}
	.mint-tab-container{
		padding-top:48px;	
	}
</style>
