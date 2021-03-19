<template>
  <div id="layout">
    <Tab></Tab>
    <router-view class="router_content"></router-view>
  </div>
</template>

<script>
 import Tab from "components/common/tab/Tab"

 export default {
  name: "layout",
  components: {
   Tab
  }
 }
</script>

<style scoped>
  #layout {
    margin: 1rem 0;
  }

  .router_content {
    margin: .5rem 1rem;
  }
</style>