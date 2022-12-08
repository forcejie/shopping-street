<template>
  <div id="app">
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from './components/tabbar/tab-bar.vue';
export default {
  components: {
    tabBar
  },
}
</script>
<style>



</style>
