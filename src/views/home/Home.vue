<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control ref="cpTabControl" :titles="['流行','新款','精选']" 
        @tabClick="tabClick" class="tabControlShown" v-show="isTabFixed"></tab-control>

    <scroll class="content" ref="scroll" :probe-type="3" @backtopShown="backtopShown" 
        :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swipperImgLoad="swipperImgLoad"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-control ref="tabControl" :titles="['流行','新款','精选']" 
        @tabClick="tabClick"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBacktop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import {debounce} from 'common/Utils'

  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

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
        isShowBacktop: false,
        tabControlOffsetTop: 0, //OffsetTop
        isTabFixed: false, //是否吸顶
        saveY: 0
      }
    },
    watch:{},
    computed:{},
    methods:{
      /**
       * 事件监听方法
       */
       //1、监听3个tab的点击
      tabClick (index) {
        //console.log(index)
        switch (index) {
          case 0:
            this.currentType = 'pop' //流行
            break
          case 1:
            this.currentType = 'new' //新款
            break
          case 2:
            this.currentType = 'sell' //精选
            break
        }
        this.$refs.tabControl.currentIndex = index
        this.$refs.cpTabControl.currentIndex = index
      },
      //2、监听点击回到顶部
      backClick () { 
        this.$refs.scroll.scrollTo(0, 0, 500)
      },
      //3、监听滚动区域
      backtopShown (position) { 
        //console.log(position)
        /*滚动超过1000显示回到顶部按钮*/
        this.isShowBacktop = (-position.y) > 1000 
        /**判断tabControl是否吸顶 */
        this.isTabFixed = (-position.y) > this.tabControlOffsetTop

      },
      //4、监听滚动到底部后加载更多
      loadMore () {
        //console.log('loadMore')
        //请求数据传入当前类型
        this.getHomeGoods(this.currentType)
      },
      //5、监听轮播图的加载
      swipperImgLoad () {
        //console.log(this.$refs.tabControl.$el.offsetTop)
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
        //console.log(this.tabControlOffsetTop)
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
        //console.log(page)
        getHomeGoods (type,page).then (res => {
          //console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
          //手动执行完成上拉加载更多
          this.$refs.scroll.finishPullUp()
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
      //1.图片加载事件监听
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      //监听goodsListItem组件中的图片加载完成 -> 调用refresh()
      this.$bus.$on('itemImgLoad', () => {
        //console.log('refresh')
        //this.$refs.scroll.refresh() //重新计算滚动高度
        refresh()
      })
      //2.获取tabControl的offsetTop
      //所有的组件都有一个属性$el,通过$el获取组件中的属性，这里获取tabControl的offsetTop
      //console.log(this.$refs.tabControl.$el.offsetTop)
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    destroyed () {
      //console.log('离开了首页')
    },
    activated () {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
      console.log(this.saveY)
    },
    deactivated () {
      //console.log('deactivated')
      this.saveY = this.$refs.scroll.getScrollY()
      console.log(this.saveY)
    }
  }
</script>
  
<style lang="css" scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    /* 原生滚动时应用的样式
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }


  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 8;
  } */

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

  .tabControlShown {
    position: relative;
    z-index: 9;
  }
</style>