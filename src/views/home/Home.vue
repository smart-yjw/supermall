<template>
  <div id="home" class="home-nav">
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper'

  import {getHomeMultiData} from 'network/home'

  export default {
    components:{
      NavBar,
      HomeSwiper
    },
    props:{},
    data(){
      return {
        banners: [],//轮播图
        recommends: []//推荐
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){
      //请求数据
      getHomeMultiData ().then (res => {
        
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(this.banners)
        console.log(this.recommends)
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