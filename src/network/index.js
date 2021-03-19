import axios from 'axios'
import Vue from 'vue'

// 1.创建axios的实例
const service = axios.create({
  baseURL: '',
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
export const get = (url, params) => service.get(url, {params});
export const post = (url, data) => service.post(url, data);
export const deletes = (url, data) => service.delete(url, {data});
export const put = (url, data) => service.put(url, data);


