// 首页网络请求
import {axios} from './index'

// 获取轮播图和今日推荐数据
export const getMultidataData = ()=>{
 return axios.get('api/home/multidata')
};

// 获取流行，精选和新款数据
export const getDataGoods = (params)=>{
 console.log(params);
 return axios.get('api/home/data',params)
}