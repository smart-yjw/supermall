<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    
    <scroll class="content" ref="scroll" :probe-type="3" @backtopShown="backtopShown" 
        :pull-up-load="true" @loadMore="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBacktop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'common/navbar/NavBar'
  import Scroll from 'common/scroll/Scroll'
  import TabControl from 'content/tabControl/TabControl.vue'
  import GoodsList from 'content/goods/GoodsList'
  import BackTop from 'content/backTop/BackTop'

  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import FeatureView from './childComps/FeatureView.vue'

  import {getHomeMultiData, getHomeGoods} from 'network/home'

  export default {
    components:{
      NavBar,
      HomeSwiper,
      Recommend,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners: [],//轮播图
        recommends: [],//推荐
        goods: { //商品数据
          'pop': {page: 0, list: []}, //保存流行的商品数据
          'new': {page: 0, list: []}, //保存新款的商品数据
          'sell': {page: 0, list: []} //保存精选的商品数据
        },
        currentType: 'pop', //当前类型
        scroll: null,
        isShowBacktop: false 
      }
    },
    watch:{},
    computed:{},
    methods:{
      /**
       * 事件监听方法
       */
      tabClick (index) { //监听3个tab的点击
        //console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick () { //监听点击回到顶部
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      backtopShown (position) { //监听滚动区域判断是否显示回到顶部按钮
        //console.log(position)
        this.isShowBacktop = (-position.y) > 1000
      },
      loadMore () {
        //console.log('上拉加载')
        getHomeGoods(this.currentType)
      },

      /**
       * 网络请求方法
       */
      getHomeMultiData (){
        getHomeMultiData ().then (res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          //console.log(res)
        })
      },
      getHomeGoods (type) { //传入类型和页码
        const page = this.goods[type].page + 1
        console.log(page)
        getHomeGoods (type,page).then (res => {
          //console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.scroll.finishPullUp()
        })
      }
    },
    created(){
      this.getHomeMultiData () //请求轮播图和推荐的数据
      this.getHomeGoods ('pop') //请求流行商品数据
      this.getHomeGoods ('new') //请求新款商品数据
      this.getHomeGoods ('sell') //请求精选商品数据

    },
    mounted(){
      
    }
  }
</script>
  
<style lang="css" scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }


  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 8;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>