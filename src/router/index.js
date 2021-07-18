import Vue from 'vue'
import VueRouter from 'vue-router'

// 10 进行懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 3 安装插件
Vue.use(VueRouter)


// 9 配置映射关系
const routes =[
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]


// 4 创建路由对象
const router = new VueRouter({
  // 8 创建属性
  routes,
  mode:'history'
})
// 5 导出
export default router
  
// 1 npm install vue-router --save 进行路由安装
// 2 在./scr目录下创建router文件夹在创建index.js文件
// 7 在main.js(入口文件中：暴露------import router from './router')