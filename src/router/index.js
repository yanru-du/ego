import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Login from 'views/login/Login'
import Layout from 'views/layout/Layout'
import Product from 'views/product/Product'
import Params from 'views/params/Params'

const routes = [
 // 登录页面
 {
  path: "/login",
  name: 'login',
  component: Login
 },
 // 内容显示内面

 {
  path: '/',
  name: "layout",
  component: Layout,
  children:[
   {
    path:"",
    redirect:"product"
   },
   {
    path:"product",
    name:"product",
    component:Product,
    meta: {
     isLogin: true,
    },
   },
   {
    path:"params",
    name:"params",
    component:Params,
    meta: {
     isLogin: true,
    },
   },
  ]
 }
]


const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})

export default router
