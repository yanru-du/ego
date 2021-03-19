<template>
  <div @click="toRouterHandle" :class="{active:isActive}" class="tabItem">
    <slot>产品</slot>
  </div>
</template>

<script>
 export default {
  name: "tab-item",
  props: ['url'],
  methods: {
   toRouterHandle() {
     this.$router.push(this.url).catch(err => err = err);
    }
  },
  computed: {
   isActive() {
    return this.$route.path === this.url;
   }
  }
 }
</script>

<style scoped>
  .active {
    background-color: orange;
  }

  .tabItem {
    padding: 1rem;
    flex: 1;
    text-align: center;
  }
</style>