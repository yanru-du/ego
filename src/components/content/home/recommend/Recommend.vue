<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommendImg"><img :src="item.image" alt=""></div>
  </div>
</template>

<script>
 export default {
  name: "recommend",
  props: ['recommend'],
 }
</script>

<style scoped>
  .recommend {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .recommendImg {
    width: 25%;
    text-align: center;
  }

  .recommendImg img {
    width: 90%;
  }
</style>