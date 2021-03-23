module.exports = {
 configureWebpack: {
  resolve: {
   alias: {
    'assets': '@/assets',
    'components': '@/components',
    'network': '@/network',
    'views': '@/views',
    'store': '@/store',
    'router': '@/router',
    'utils': '@/utils',
    'plugins': '@/plugins'
   }
  },
 },
 // 解决跨域
 devServer: {
  proxy: {
   '/api': {
    target: "http://152.136.185.210:7878/api/m5",
    changeOrigin: true,
    pathRewrite: {
     "^/api": ""
    }
   }
  }
 },
}