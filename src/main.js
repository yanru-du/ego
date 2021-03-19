import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


import 'router/promise.js'  // 路由拦截设置
import 'utils/js/fontStyle'  // 字体设置
import 'assets/css/index.css'  // 引入公共样式
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
