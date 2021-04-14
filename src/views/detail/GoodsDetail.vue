<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import {getGoodsDetail} from 'network/api'

import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

  export default {
    components:{
      DetailNavBar,
      DetailSwiper
    },
    props:{},
    data(){
      return {
        goodsID: null,
        topImages: []
      }
    },
    watch:{},
    computed:{},
    methods:{},
    created(){
      //保存路由传递过来的参数
      this.goodsID = this.$route.params.iid
      console.log(this.goodsID)
      //根据商品ID请求详情数据
      getGoodsDetail(this.goodsID).then(res => {
        
        //保存顶部轮播图
        this.topImages = res.data.result.itemInfo.topImages
        //console.log(this.goodsID)
      })
    },
    mounted(){}
  }
</script>
  
<style lang="css" scoped>
  
</style>