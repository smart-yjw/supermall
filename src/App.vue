<template>
  <div id="app">

    <main-tab-bar/>

    <keep-alive exclude="GoodsDetail">
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'

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
  @import 'assets/css/base.css'

</style>
