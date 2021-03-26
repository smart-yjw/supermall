<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->

    <tab-bar>
      <tab-bar-item></tab-bar-item>
    </tab-bar>

    
  </div>
</template>

<script>
  import TabBar from '@/components/content/tabbar/TabBar.vue'
  import TabBarItem from '@/components/content/tabbar/TabBarItem.vue'

  export default {
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scope="css">
  @import "assets/css/base.css"

</style>
