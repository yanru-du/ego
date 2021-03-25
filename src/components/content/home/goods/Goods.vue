<template>
  <div class="goods">
    <div class="goodsItem" v-for="item in list">
      <a :href="item.link" :data_id="item.iid">
        <img :src="item.show.img" alt="">
        <div class="goods_footer">
          <p class="title">{{item.title}}</p>
          <span class="price">{{item.orgPrice}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
 export default {
  name: "goods",
  props:['list'],
  mounted(){
   console.log(this.list);
  },
 }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
  }
  .goodsItem{
    width: 50%;
    border-right: solid 1px rgba(0,0,0,.1);
    border-top: solid 1px rgba(0,0,0,.1);
    box-sizing: border-box;
  }
  .goodsItem img{
    width: 100%;
  }
  .goods_footer{
    padding: .5rem 1rem;
    box-sizing: border-box;
    width: 100%;
  }
  .title{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: .5rem 0;
  }
  .price{
    color: red;
  }
</style>