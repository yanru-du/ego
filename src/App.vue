<template>
  <div id="app">
    <router-view if="isRouterAlive"></router-view>
    <Tab/>
  </div>
</template>

<script>
 import Tab from 'components/common/tab/Tab'

 export default {
  name: 'app',
  provide() {
   return {
    reload: this.reload
   }
  },
  data() {
   return {
    isRouterAlive: true
   }
  },
  components: {
   Tab
  },
  methods: {
   reload(...params) {
    if (params) {
     params.forEach(item => {
      item.isGetData = false;
      this.$nextTick(() => {
       item.isGetData = true
      })
     })
    } else {
     this.isRouterAlive = false;
     this.$nextTick(() => {
      this.isRouterAlive = true
     })
    }

   },
  },
 }
</script>

<style>

</style>
