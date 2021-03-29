<template>
  <div id="home" class="home-nav">
    <nav-bar>
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import {getHomeMultiData} from 'network/home'

  export default {
    components:{
      NavBar
    },
    props:{},
    data(){
      return {
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){
      getHomeMultiData ().then (res => {
        console.log(res)
      })
    },
    mounted(){}
  }
</script>
  
<style lang="css" scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }
</style>