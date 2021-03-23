<!--
  需要往子组件中传入
  currentIndex， 用来判断是否选中的下标
  tabList       需要显示的内容
  -->
<template>
  <div class="tab">
      <tab-item v-for="(item,index) in tabList" :key="index" ><span :class="{active:currentIndex === index}" @click="TabClickHandle(item.flag)">{{item.data}}</span>
      </tab-item>
  </div>
</template>

<script>
 import TabItem from './TabItem'

 export default {
  name: "tab",
  props: ['tabList','currentIndex'],
  components: {
   TabItem
  },
  methods:{
   TabClickHandle(flag){
    this.$emit('TabClickHandle',flag);
   }
  },
 }
</script>

<style scoped>
  .tab {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 49px;
  }

  .active{
    padding: .5rem ;
    color: red;
    border-bottom: 1px solid red;
  }
</style>