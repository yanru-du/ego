<template>
  <div class="swiper">
    <mt-swipe :auto="2000" >
      <mt-swipe-item v-for="(item,index) in banner"><img :src="item.image" alt="" class="bannerImg"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
 export default {
  name: "swiper",
  props: ['banner'],
  mounted() {
   console.log(this.banner);
  }
 }
</script>

<style scoped>
  .swiper {
    width: 100%;
    height: 20rem;
  }

  .bannerImg {
    width: 100%;
  }

  .mint-swipe-indicator {
    background-color: #fff !important;
  }

  .mint-swipe-indicator.is-active {
    background-color: pink !important;
  }
</style>