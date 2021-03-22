<template>
  <div id="app">
    <router-view></router-view>
    <Tab/>
  </div>
</template>

<script>
 import Tab from 'components/common/tab/Tab'

 export default {
  name: 'app',
  components: {
   Tab
  }
 }
</script>

<style>

</style>
