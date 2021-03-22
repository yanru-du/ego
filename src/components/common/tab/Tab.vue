<template>
  <div id="tab">
    <tab-item link="/home" >
      <template v-slot:normal><img src="~assets/img/tab/home.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/tab/homeActive.png" alt=""></template>
      <template v-slot:text>首页</template>
    </tab-item>
    <tab-item link="/category">
      <template v-slot:normal><img src="~assets/img/tab/about.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/tab/aboutActive.png" alt=""></template>
      <template v-slot:text>分类</template>
    </tab-item>
    <tab-item link="/car">
      <template v-slot:normal><img src="~assets/img/tab/car.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/tab/carActive.png" alt=""></template>
      <template v-slot:text>购物车</template>
    </tab-item>
    <tab-item link="/profile">
      <template v-slot:normal><img src="~assets/img/tab/profile.png" alt=""></template>
      <template v-slot:active><img src="~assets/img/tab/profileActive.png" alt=""></template>
      <template v-slot:text>我的</template>
    </tab-item>
  </div>
</template>

<script>
 import TabItem from './TabItem'

 export default {
  name: "tab",
  components: {
   TabItem
  }
 }
</script>

<style scoped>
  #tab {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    height: 4.9rem;
    width: 100%;
    border-top: solid 1px #999;
    display: flex;
    align-items: center;
    background-color: pink;
  }

</style>