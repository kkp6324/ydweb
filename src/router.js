import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"
import Swipe from "./components/Swipe.vue"
import book_product from "./components/book_product.vue"
import book_product_list from "./components/book_product_list.vue"
import product from "./components/product.vue"
import BookMall from "./components/BookMall.vue"
import book_backstage from "./components/book_backstage.vue"
import Login from "./components/Login.vue"
import registered from "./components/registered.vue"
import header1 from "./components/header1.vue"
import user from "./components/user.vue"
import bookrack from "./components/bookrack.vue"
import fullBookMall from "./components/full_BookMall.vue"
import ceshi2 from "./components/ceshi2.vue"
import ceshi1 from "./components/ceshi1.vue"
//1:引入自定义组件 
//1.找到vue文件位置引入
Vue.use(Router)
//2:配置访问自定义组件路径
//   {path访问路径 component  组件名称}
export default new Router({
  routes: [
		//2.挂载到路由器让服务器可以访问
		{path:'/',component:Home},
		{path:'/Swipe',component:Swipe},
		{path:'/book_product',component:book_product},
		{path:'/productlist',component:book_product_list},
		{path:'/product',component:product},
		{path:'/BookMall',component:BookMall},
		{path:'/bookbackstage',component:book_backstage},
		{path:'/ceshi1/:id',component:ceshi1,props: { default: true, sidebar: false }},
		{path:'/ceshi2/:id',component:ceshi2,props: { default: true, sidebar: false }},
		{path:'/Login',component:Login},
		{path:'/registered',component:registered},
		{path:'/header1',component:header1},
		{path:'/user',component:user},
		{path:'/bookrack',component:bookrack},
		{path:'/fullBookMall',component:fullBookMall},
  ]
})


