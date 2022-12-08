<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="mid"><slot name="mid"></slot></div>
    <div class="right"><slot class="right"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style lang="less" scoped>
.nav {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .left {
        width: 60px;
    }
    .mid {
        flex: 1;
    }
    .right {
        width: 60px;
    }
}
</style>