<!--
  在父组件中要设置wrapper 的高度，溢出隐藏
  同时在获取完后台数据后要及时刷新
  在组件中是指一个ref，用来使用此组件中的方法
  设置一个行内样式：获取窗口的高度，然后减去底部和顶部tab高度，剩下的就是wrapper 的高度
  <Scroll v-if="banner.isGetData" ref="scroll" class="wrapper" :style="{height:clientHeight+'rem'}" :probeType="2"
            @scroll="scroll" :pullDownRefresh="true" @pullingDown="pullingDown" :pullUpLoad="true"
            @pullingUp="pullingUp">
   </Scroll>
-->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
 import BScroll from 'better-scroll'

 export default {
  name: "Scroll",
  props: {
   probeType: {
    type: Number,
    default: 0
   },
   pullUpLoad: {
    type: Boolean,
    default: false,
   },
   pullDownRefresh: {
    type: Boolean,
    default: false,
   },
  },
  data() {
   return {
    scroll: null,
   }
  },
  mounted() {
   // 1.创建BScroll对象
   this.scroll = new BScroll(this.$refs.wrapper, {
    probeType: this.probeType,     // 是否监听滚动.
    pullUpLoad: this.pullUpLoad,   //是否上拉加载更多
    pullDownRefresh: this.pullDownRefresh,   //是否下滑刷新
   });
   // 监听滚动位置
   this.scroll.on('scroll', position => {
    this.$emit('scroll', position)
   });
   // 是否上拉加载更多
   this.scroll.on('pullingUp', () => {
    this.$emit('pullingUp')
   });
   // 是否下拉刷新
   this.scroll.on('pullingDown', () => {
    this.$emit('pullingDown')
   });
  },
  methods: {
   // 回到顶部方法
   scrollTo(x=0, y=0, time = 300) {
    this.scroll.scrollTo(x, y, time)
   },
   // 停止滑动时
   scrollEnd(){
    this.scroll.scrollEnd()
   },
  // 上拉加载
   finishPullUp(){
    this.scroll.finishPullUp()
   },
   //下拉刷新叠加使用
   finishPullDown() {
    this.scroll.finishPullDown();
   },
   //数据加载完之后重新计算高度
   refresh() {
    this.scroll.refresh()
   }
  }
 }
</script>

<style scoped>

</style>
