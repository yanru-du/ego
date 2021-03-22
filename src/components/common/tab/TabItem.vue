<template>
  <div @click="pathHandle" class="tabItem" :class="{active:isActive}">
    <div class="tabItemSlot">
      <div v-if="isActive"><slot name="active" ></slot></div>
      <div v-else><slot name="normal" ></slot></div>
      <div><slot name="text"></slot></div>
    </div>
  </div>
</template>

<script>
 export default {
  name: "tab-item",
  props: ['link'],
  methods: {
   pathHandle() {
    this.$router.push(this.link);
   },
  },
  computed:{
   isActive(){
    return this.$route.path === this.link
   }
  },
 }
</script>

<style scoped>
  .tabItem {
    flex: 1;
  }
  .active{
    color: red;
  }
  .tabItemSlot{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .tabItemSlot img{
    width: 2rem;
  }
  .tabItemSlot>div:last-child{
    margin-top: .5rem;
  }
</style>