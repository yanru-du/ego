import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from 'views/login/Login'
import layout from 'views/layout/Layout'

const routes = [
  // 登录页面
  {
    path: "/login",
    name: 'login',
    component: Login
  },
  // 内容显示内面
  {
    path: "",
    redirect: "/index"
  },
  {
    path: '/index',
    name: "index",
    component: layout,
    meta: {
      isLogin: true,
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
