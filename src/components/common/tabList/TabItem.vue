<template>
  <div class="tabItem">
    <slot></slot>
  </div>
</template>

<script>
 export default {
  name: "tab-item"
 }
</script>

<style scoped>
.tabItem{
  flex: 1;
  padding: .5rem 1rem;
  box-sizing: border-box;
}
</style>