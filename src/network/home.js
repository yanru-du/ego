// 首页网络请求
import {axios} from './index'

export const getMultidataData = ()=>{
 return axios.get('/home/multidata')
}