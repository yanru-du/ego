import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'

Vue.use(VueRouter);
//解决路由重复问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location){
 return originalPush.call(this,location).catch(err => err )
};

const routes = [
 {
  path:'',
  redirect:'/home',
 },
 {
  path:"/home",
  name:'home',
  component:Home
 },
 {
  path:"/category",
  name:'category',
  component:()=>import('views/category/Category')
 },
 {
  path:"/car",
  name:'car',
  component:()=>import('views/car/Car')
 },
 {
  path:"/profile",
  name:'profile',
  component:()=>import('views/profile/Profile')
 },
];


const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
});

export default router
