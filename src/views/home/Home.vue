<template>
  <div>
    <!--导航栏-->
    <nav-item/>
    <!--轮播图-->
    <Swiper v-if="banner.isGetData" :banner="banner.data"/>
    <!--今日推荐-->
    <Recommend v-if="recommend.isGetData" :recommend="recommend.data"/>
    <!--流行、新款、精选-->
    <Tab v-if="tabList.isGetData" :tabList="tabList.data" :currentIndex="tabList.currentIndex"
         @TabClickHandle="TabClickHandle"/>
  </div>
</template>

<script>
 import NavItem from 'components/content/home/nav/NavItem'
 import Swiper from 'components/content/home/swiper/Swiper'
 import Recommend from 'components/content/home/recommend/Recommend'
 import Tab from 'components/common/tabList/Tab'

 // axios 路由请求封装
 import {getMultidataData} from 'network/home'

 export default {
  name: "home",
  inject: ['reload'],
  data() {
   return {
    banner: {    //轮播图
     data: [],    // 数据
     isGetData: false   // 是否加载轮播图组件
    },
    recommend: {    // 今日推荐
     data: [],    // 数据
     isGetData: false,  // 是否加载今日推荐组件
    },
    tabList: {   // 流行 新款  精选
     data: [
      {
       data: '流行',
       flag: "fashion",
       page:1
      },
      {
       data: '新款',
       flag: 'newStyle',
       page:1
      },
      {
       data: '精选',
       flag: "select",
       page:1
      }
     ],
     isGetData: false,
     currentIndex: 0
    },
   }
  },
  components: {
   NavItem,
   Swiper,
   Recommend,
   Tab,
  },
  created() {
   getMultidataData().then(res => {
    let {banner,recommend } = res.data;
    this.banner.data = banner.list;
    this.recommend.data = recommend.list;
    this.reload(this.banner,this.recommend,this.tabList);
   }).catch(err => {
    console.log(err);
   })
  },
  methods: {
   TabClickHandle(flag) {
    switch (flag) {
     case 'fashion':
      this.tabList.currentIndex = 0;
      break;
     case 'newStyle':
      this.tabList.currentIndex = 1;
      break;
     case 'select':
      this.tabList. currentIndex = 2;
      break;
    }
   },


  },
 }
</script>

<style scoped>

</style>