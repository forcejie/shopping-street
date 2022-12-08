<template>
  <div class="tabbar">
    <van-tabbar v-model="currentIndex">
        <template v-for="(item, index) in tabbarData">
            <van-tabbar-item :to="item.path">
                <template #default>
                    <span>{{item.text}}</span>
                </template>
                <template #icon>
                    <img v-if="(currentIndex !== index)" :src="require('../../assets/img/' + item.image)" alt=""> 
                    <img v-else :src="require('../../assets/img/' + item.imageActive)" alt="">  
                </template>
            </van-tabbar-item>
        </template>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    data() {
        return {
            active: 0,
            currentIndex: 0,
            tabbarData:[
                {
                    text: "首页",
                    path: "/home",
                    image: "tabbar/首页 (1).png",
                    imageActive: "tabbar/首页 (2).png"
                },
                {
                    text: "分类",
                    path: "/category",
                    image: "tabbar/应用中心.png",
                    imageActive: "tabbar/应用中心 (1).png"
                },
                {
                    text: "购物车",
                    path: "/cart",
                    image: "tabbar/购物车空.png",
                    imageActive: "tabbar/购物车满.png"
                },
                {
                    text: "我的",
                    path: "/my",
                    image: "tabbar/我的 (3).png",
                    imageActive: "tabbar/我的 (4).png"
                },
            ]
        };
    }

}
</script>

<style lang="less" scoped>
:deep .van-tabbar-item--active {
    color: rgb(203, 21, 63);
}
</style>