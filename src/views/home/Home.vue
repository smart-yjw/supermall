<template>
  <div id="home" class="home-nav">
    <nav-bar>
      <div slot="center">
        购物街
      </div>
    </nav-bar>
    <swiper>
        <swiper-item v-for="(item,key) in banners" :key="key">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
      </swiper>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import {Swiper, SwiperItem} from 'common/swiper'

  import {getHomeMultiData} from 'network/home'


  export default {
    components:{
      NavBar,
      Swiper,
      SwiperItem,
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