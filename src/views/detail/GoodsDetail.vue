<template>
  <div id="detail">
    <detail-nav-bar ref="detailNavBar" class="detail-nav" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" @getScrollPosition="getScrollPosition" :probe-type="3">
      <!-- 顶部轮播图 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- 详情标题，价格 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 穿着效果 -->
      <detail-goods-info :detailInfo="detailInfo" @detailImgLoad="detailImgLoad"></detail-goods-info>
      <!-- 商品参数信息 -->
      <detail-param-info ref="detailParamInfo" :paramInfo="paramInfo"></detail-param-info>
      <!-- 商品评论信息 -->
      <detail-comment-info ref="detailCommentInfo" :commentInfo="commentInfo"></detail-comment-info>
      <!-- 商品推荐信息,复用goods-list -->
      <goods-list ref="goodsList" :goods="recommendList"></goods-list>

    </scroll>
  </div>
</template>

<script>
import {getGoodsDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/api'

import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import {debounce} from 'common/Utils'
import {goodsImgLsnMixin} from 'common/Mixin'

  export default {
    name: 'GoodsDetail',
    components:{
      DetailNavBar,
      DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
    },
    mixins: [goodsImgLsnMixin],
    props:{},
    data(){
      return {
        iid: '',
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        goodsImgLsn: null, //监听图片加载函数
       
        themOffsetTop: [], //保存的title对应元素的位置
        getThemOffsetTop: null, //获取title对应元素高度的函数
        currentIndex: 0
      }
    },
    watch:{},
    computed:{},
    methods:{
      //监听穿着效果图片加载
      detailImgLoad () {
        //console.log('++')
        this.scrollRefresh()
        
        this.getThemOffsetTop()
      },
      titleClick (index) {
        //console.log('点击了'+index)
        //滚动到点击对应的元素位置
        this.$refs.scroll.scrollTo(0, -this.themOffsetTop[index], 200)
      },
      getScrollPosition (position) {
        // this.paramOffsetTop = this.$refs.detailParamInfo.$el.offsetTop
        // this.commentOffsetTop = this.$refs.detailCommentInfo.$el.offsetTop
        // this.recommendOffsetTop = this.$refs.goodsList.$el.offsetTop
        // if(position < this.paramOffsetTop) {
        //   console.log('选中商品')
        //   this.$refs.detailNavBar.currentIndex === 0
        // } else if(position >= this.paramOffsetTop && position < this.commentOffsetTop){
        //   console.log('选中参数')
        //   this.$refs.detailNavBar.currentIndex === 1
        // } else if(position >= this.commentOffsetTop && position < this.recommendOffsetTop){
        //   console.log('选中评论')
        //   this.$refs.detailNavBar.currentIndex === 2
        // } else if(position >= this.recommendOffsetTop){
        //   console.log('选中推荐')
        //   this.$refs.detailNavBar.currentIndex === 3
        // }
        
        console.log(position)
        //[0, 16042, 17316, 17550]
        //滚动到某个位置，要选中对应的title
        let scrollPositionY = -position.y
        let length = this.themOffsetTop.length
        console.log(length)
        // for(let i = 0, i < length; i ++) {
        //   if ((i < length -1 && scrollPositionY > this.themOffsetTop[i] && 
        //     scrollPositionY < this.themOffsetTop[i+1]) || (i === length-1 && scrollPositionY > this.themOffsetTop[i])) {
        //       console.log(i)
        //     }
        // }

      }
    },
    created(){
      //保存路由传递过来的参数
      this.iid = this.$route.query.iid
      //console.log(this.iid)
      //根据商品ID请求详情数据
      getGoodsDetail(this.iid).then(res => {
        //先将返回的数据保存起来 -> 返回的数据太过复杂，下面会抽取出来分开保存
        let data = res.data.result
        //console.log(data)
        //取出顶部轮播图
        this.topImages = data.itemInfo.topImages
        //获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取店铺信息
        this.shop = new Shop(data.shopInfo)
        //获取商品的详情数据detailInfo
        this.detailInfo = data.detailInfo
        //获取商品参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //获取评论信息
        this.commentInfo = data.rate.list[0];
      })
      //当dom数据更新后，对新的dom进行操作要在$.nextTick中执行
      this.$nextTick(() => {

      })
      
      //获取商品推荐信息，因为和首页商品一样，这里接口只返回了固定的24条数据
      getRecommend().then((res, error) => {
        //if (error) return
        this.recommendList = res.data.data.list
        //console.log(res)
      })
    },
    mounted(){//以下注释代码混入到mixin中了
      // let scrollRefresh = debounce(this.$refs.scroll.refresh(), 100)
      // this.goodsImgLsn = () => {
      //   scrollRefresh
      // }
      // this.$bus.$on('goodsImgLoad', this.goodsImgLsn)
      // console.log('mounted')
      //获取4个菜单对应元素的offsetTop(并进行了防抖操作)
      this.getThemOffsetTop = debounce(() => {
          this.themOffsetTop = []
          this.themOffsetTop.push(0)
          this.themOffsetTop.push(this.$refs.detailParamInfo.$el.offsetTop)
          this.themOffsetTop.push(this.$refs.detailCommentInfo.$el.offsetTop)
          this.themOffsetTop.push(this.$refs.goodsList.$el.offsetTop)
          //console.log(this.themOffsetTop)
      })
      
    },
    updated() {
      
    },
    destroyed () {
      this.$bus.$off('goodsImgLoad', this.goodsImgLsn)
      //console.log('detail destroyed')
    }
  }
</script>
  
<style lang="css" scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
  }
</style>