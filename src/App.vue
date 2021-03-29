<template>
  <div id="app">
    <main-tab-bar>
      
    </main-tab-bar>

    <router-view/>
    
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar.vue'

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
