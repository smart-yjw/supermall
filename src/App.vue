<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>

    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from 'content/tabbar/MainTabBar.vue'

  export default {
    components: {
      MainTabBar
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style scope="css">
  @import "assets/css/base.css"

</style>
