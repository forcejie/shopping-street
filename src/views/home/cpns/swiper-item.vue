<template>
  <div class="swiper">
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe> -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="" />
                </a>
            </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    name: "SwipeItem",
    props:{
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
  .my-swipe .van-swipe-item img{
    color: #fff;
    font-size: 20px;
    width: 100%;
    line-height: 150px;
    text-align: center;
  }
</style>