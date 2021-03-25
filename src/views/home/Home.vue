<template>
  <div>
    <!--导航栏-->
    <nav-item/>
    <Scroll v-if="banner.isGetData" ref="scroll" class="wrapper" :style="{height:clientHeight+'rem'}" :probeType="2"
            @scroll="scroll" :pullDownRefresh="true" @pullingDown="pullingDown" :pullUpLoad="true"
            @pullingUp="pullingUp">
      <!--轮播图-->
      <Swiper v-if="banner.isGetData" :banner="banner.data"/>
      <!--今日推荐-->
      <Recommend v-if="recommend.isGetData" :recommend="recommend.data"/>
      <!--流行、新款、精选-->
      <Tab v-if="tab.isGetData" :tab="tab.data" :currentIndex="tab.currentIndex"
           @TabClickHandle="TabClickHandle"/>
      <!--流行、新款、精选数据-->
      <Goods v-if="goods.isGetData" :list="goods[goods.type].data"/>
      <!--回到顶部-->
      <scroll-top/>
    </Scroll>
  </div>
</template>

<script>
 import NavItem from 'components/content/home/nav/NavItem'
 import Swiper from 'components/content/home/swiper/Swiper'
 import Recommend from 'components/content/home/recommend/Recommend'
 import Goods from 'components/content/home/goods/Goods'

 import Tab from 'components/common/tabList/Tab'
 import ScrollTop from 'components/common/scrollTop/ScrollTop'
 import Scroll from 'components/common/scroll/Scroll'

 // axios 路由请求封装
 import {
  getMultidataData,
  getDataGoods
 } from 'network/home'

 export default {
  name: "home",
  inject: ['reload'],
  data() {
   return {
    initFlag: true,  // 用来判断是否是初始化刷新
    banner: {    //轮播图
     data: [],    // 数据
     isGetData: false   // 是否加载轮播图组件
    },
    recommend: {    // 今日推荐
     data: [],    // 数据
     isGetData: false,  // 是否加载今日推荐组件
    },
    tab: {   // 流行 新款  精选
     data: [
      {
       data: '流行',
       flag: "pop",
      },
      {
       data: '新款',
       flag: 'news',
      },
      {
       data: '精选',
       flag: "sell",
      }
     ],  // 流行 新款  精选 栏数据
     isGetData: false,  // 是否加载模块
     currentIndex: 0,  // 传入子模块的下标选项，用来判断样式修改
    },
    goods: {
     pop: {
      page: 1,
      data: [],
     },   // 流行返回的数据
     news: {
      page: 1,
      data: [],
     },   // 新款返回的数据
     sell: {
      page: 1,
      data: [],
     },   // 精选返回的数据
     isGetData: false,  // 是否加载模块,
     type: 'pop',    // 当前 tab 栏点击的获取后台数据的 type 值
    },
    scrollTop: {
     isGetData: false,  // 是否加载模块,
    },
    clientHeight: 0,
   }
  },
  components: {
   NavItem,
   Swiper,
   Recommend,
   Tab,
   Goods,
   ScrollTop,
   Scroll,
  },
  created() {
   // 获取轮播图和今日推荐数据
   getMultidataData().then(res => this.getMultidataDataHandle(res)).catch(err => console.log(err));
   // 获取流行、精选和新款数据
   this.TabClickCommonhandle({type: 'pop', page: 1});
  },
  computed: {
   // 获取窗口的高度
   getClientHeight() {
    this.clientHeight = ((document.documentElement.clientHeight || document.body.clientHeight) - 49 * 2) / 10;
   }
  },
  mounted() {
   // 获取窗口的高度
   this.getClientHeight;
  },
  methods: {
   // 滚动时监听位置
   scroll(position) {
    // console.log(position);
   },
   // 下拉刷新
   pullingDown() {
    console.log('下滑刷新');
    this.$refs.scroll.finishPullDown();
   },
   // 上拉加载
   pullingUp() {
    console.log('上拉加载');
    let {type} = this.goods;
    let page = this.goods[type].page ;
    this.TabClickCommonhandle({type,page});
    this.$refs.scroll.finishPullUp();
   },
   // 获取轮播图和今日推荐数据处理
   getMultidataDataHandle(res) {
    let {banner, recommend} = res.data;
    this.banner.data = banner.list;
    this.recommend.data = recommend.list;
   },
   // tab栏点击获取数据处理
   TabClickHandle(flag) {
    switch (flag) {
     case 'pop':
      this.tab.currentIndex = 0;
      this.goods.type = 'pop';
      this.TabClickCommonhandle({type: 'pop', page: this.goods['pop'].page});
      break;
     case 'news':
      this.tab.currentIndex = 1;
      this.goods.type = 'news';
      this.TabClickCommonhandle({type: 'news', page: this.goods['news'].page});
      break;
     case 'sell':
      this.tab.currentIndex = 2;
      this.goods.type = 'sell';
      this.TabClickCommonhandle({type: 'sell', page: this.goods['sell'].page});
      break;
    }
   },
   // tab栏点击获取数据公共方法
   TabClickCommonhandle(params) {
    getDataGoods(params).then(res => this.getDataGoodsHandle(res)).catch(err => console.log(err));
   },
   //获取流行、精选和新款数据处理
   getDataGoodsHandle(res) {
    let {list} = res.data;
    let {type} = this.goods;
    this.goods[type].data = [...this.goods[type].data,...list];
    this.goods[type].page++;
    if (this.initFlag) {
     this.reload(this.banner, this.recommend, this.tab, this.goods);
     this.initFlag = false;
    } else {
     this.reload(this.goods)
    }
    this.$refs.scroll && this.$refs.scroll.refresh();
   },
  },

 }
</script>

<style scoped>
  .wrapper {
    position: relative;
    left: 0;
    top: 0;
    /*height: 40rem;*/
    padding: 0 0 4.9rem 0;
    overflow: hidden;
  }
</style>