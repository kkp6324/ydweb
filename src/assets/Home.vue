<template>
   <div class="page-tabbar">
      <div class="page-wrap">
      <!--Home.vue-->
      <!--1:顶部标题子组件-->      
      <titlebar
       leftTitle="微信(11)"
       :search="mysearch"
       :add="myadd"
       :rightFirstImg="require('../../assets/ic_search.png')"
       :rightSecondImg="require('../../assets/ic_add.png')"
      ></titlebar>
      <!--2:div保留(标题)48px高度-->
      <div style="margin-top:48px;">
      </div>
      <!--Home.vue 入口全局组件-->
      <!--3:切换面板列表-->
      <mt-tab-container class="page-tabbar-container" v-model="active">
        <mt-tab-container-item id="message">
         <messagelist>
         </messagelist>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--4:tabbar列表-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="message">
         <tabbaricon
          :selectedImage="require('../../assets/ic_weixin_selected.png')"
          :normalImage="require('../../assets/ic_weixin_normal.png')"
          :focused="currentIndex[0].isSelect">
         </tabbaricon>
         微信   
        </mt-tab-item>
      </mt-tabbar>
   </div>
   </div>
</template>
<script>
import TitleBar from "./common/TitileBar.vue"
import MessageList from "./common/MessageList.vue"
import TabBarIcon from "./common/TabBarIcon.vue"
export default {
  data(){
    return {
      //面板中显示子组件id
      active:"message",
      //创建数组保存图片焦点状态
      currentIndex:[
        {isSelect:false},
        {isSelect:false},
        {isSelect:false},
        {isSelect:false}
      ]
    }
  },
  methods: {
    mysearch(){console.log("搜索");},
    myadd(){console.log("+")}
  },
  components:{
    "titlebar":TitleBar,
    "messagelist":MessageList,
    "tabbaricon":TabBarIcon
  }
}
</script>
<style>
/*最外层父元素*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
.page-wrap{
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px;
}
</style>


