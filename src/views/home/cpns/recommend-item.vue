<template>
  <div class="recommend">
    <div class="item">
        <template v-for="(item, index) in recommend">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </template>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        recommend: {
            type: Array,
            default: () => {[]}
        }
    }
}
</script>

<style lang="less" scoped>
.recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    width: 100%;
    border-bottom: 10px solid #eee;
    .item {
        display: flex;
        flex: 1;
        padding: 10px 0 20px;
        // margin: 0 20px;
    // flex-direction: column;
        img {
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
            margin: 12px;
        }
    }
}
</style>