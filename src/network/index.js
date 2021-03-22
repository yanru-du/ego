import Axios from 'axios'

// 1.创建axios的实例
const service = Axios.create({
 baseURL: "http://152.136.185.210:7878/api/m5",
 timeout: 5000
});
// 2.axios请求拦截
service.interceptors.request.use(config => {
 // Vue.prototype.$bus.$emit('loading', true);
 return config
}, error => {
 return Promise.reject(error)
});

// 2.2.响应拦截
service.interceptors.response.use(res => {
 // Vue.prototype.$bus.$emit('loading', false);
 return res.data
}, error => {
 return Promise.reject(error)
});


// 3.发送真正的网络请求  get 和 put  必须发送{}
const get = (url, params) => service.get(url, {params});
const post = (url, data) => service.post(url, data);
const deletes = (url, data) => service.delete(url, {data});
const put = (url, data) => service.put(url, data);

export const axios = {
 get,
 post,
 deletes,
 put,
};