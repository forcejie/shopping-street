<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="mid">快乐购物</div></nav-bar>
    <div class="content">
      <swiper-item :banners="banners"></swiper-item>
      <recommend-item :recommend="recommend"></recommend-item>
      <feature-item></feature-item>
      <div v-for="item in 100">
        <h2>{{item}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/nav-bar/nav-bar.vue'
import { getHomeData } from '@/service/home';
import SwiperItem from './cpns/swiper-item.vue';
import RecommendItem from './cpns/recommend-item.vue';
import FeatureItem from './cpns/feature-item.vue';

export default {
    components: {
        NavBar,
        SwiperItem,
        RecommendItem,
        FeatureItem
    },
    data(){
      return {
        banners: [],
        recommend: []
      }
    },
    created() {
      getHomeData().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
}
</script>

<style lang="less" scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
  .home-nav {
    background-color: var(--primary-color);
    color: #fff;
    font-size: 18px;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 44px);
  }
}
</style>