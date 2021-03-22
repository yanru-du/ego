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
 // devServer:{
 //    proxy:{
 //      '/api':{
 //        target:"http:localhost:8080",
 //       changeOrigin:true,
 //       pathRewrite:{
 //          "^/api":""
 //       }
 //      }
 //    }
 // },
}