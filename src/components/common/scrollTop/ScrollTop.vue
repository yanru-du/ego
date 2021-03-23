<template>
  <div class="toUp" @click="toUpHandle">
    <img src="~assets/img/home/toUp.png" alt="">
  </div>
</template>

<script>
 export default {
  name: "scroll-top",
  methods: {
   toUpHandle() {
    console.log('点击了回到顶部');
   }
  }
 }
</script>

<style scoped>
  .toUp {
    position: fixed;
    z-index: 2;
    bottom: 10rem;
    right: 2rem;
    width: 5rem;
    height: 5rem;
    background-color: #fff;
    border-radius: 50%;
  }

  .toUp img {
    width: 5rem;
  }
</style>