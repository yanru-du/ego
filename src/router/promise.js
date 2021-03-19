import router from './index'

// 路由拦截，只要没有登录，就进入登录页面
router.beforeEach((to, from, next) => {
   if (to.meta.isLogin) {   // 判断是否需要登录
    //如果登录
    const token = true;
    if (token) {
     next();
    } else {
     next({
      path:'/login'
     });
    }
   } else {
    next()
   }
  }
);
