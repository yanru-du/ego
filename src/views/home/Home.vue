<template>
  <div>
    <!--导航栏-->
    <nav-item/>
    <!--轮播图-->
    <Swiper v-if="banner.isBanner" :banner="banner.data"/>
    <!--今日推荐-->
    <Recommend v-if="recommend.isRecommend" :recommend="recommend.data"/>
  </div>
</template>

<script>
 import NavItem from 'components/content/home/nav/NavItem'
 import Swiper from 'components/content/home/swiper/Swiper'
 import Recommend from 'components/content/home/recommend/Recommend'
 // axios 路由请求封装
 import {getMultidataData} from 'network/home'

 export default {
  name: "home",
  data() {
   return {
    banner: {    //轮播图
     data: [],    // 数据
     isBanner: false   // 是否加载轮播图组件
    },
    recommend: {    // 今日推荐
     data: [],    // 数据
     isRecommend: false,  // 是否加载今日推荐组件
    }
   }
  },
  components: {
   NavItem,
   Swiper,
   Recommend,
  },
  created() {
   getMultidataData().then(res => {
    this.banner.data = res.data.banner.list;
    this.recommend.data = res.data.recommend.list;
    this.$nextTick(() => {
     this.banner.isBanner = true;
     this.recommend.isRecommend = true;
    })
   }).catch(err => {
    console.log(err);
   })
  },
 }
</script>

<style scoped>

</style>