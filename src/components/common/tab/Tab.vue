<template>
  <div class="tab">
    <tab-item url="/product">产品介绍</tab-item>
    <tab-item url="/params">产品参数</tab-item>
  </div>
</template>

<script>
 import TabItem from './TabItem'

 export default {
  components: {TabItem},
  name: "tab",
  component:{
   TabItem
  },
 }
</script>

<style scoped>
.tab{
  width:100%;
  background-color: lightgray;
  border-bottom: solid 1px #999;
  display: flex;
}
</style>