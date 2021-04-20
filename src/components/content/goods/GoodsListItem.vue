<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="goodsImgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data () {
    return {
    }
  },
  computed: {
    //首页商品图片和详情页推荐的商品图片取值不同
      showImage () {
        return this.goodsItem.image || this.goodsItem.show.img
      }
  },
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    /**监听图片加载*/
    goodsImgLoad () {
      //使用事件总线，将goodsListItem组件中的事件传递到非父组件 Home中：
      this.$bus.$emit('goodsImgLoad')
      //console.log('imgLoad')
      // if (this.$route.path.indexOf('/home')) {//监听首页商品图片加载
      //   this.$bus.$emit('homeGoodsImgLsn')
      // } else if (this.$route.path.indexOf('/goodsdetail')) {//监听详情页商品图片加载
      //   this.$bus.$emit('goodsDetailImgLsn')
      // }

    },
    /**跳转详情 */
    itemClick () {
      //this.$router.push('/goodsdetail/' + this.goodsItem.iid)
      //通过路由跳转详情页，通过query传递参数
      this.$router.push({
        path: '/goodsdetail',
        query: {
          iid: this.goodsItem.iid
        }
      })
      //console.log(this.goodsItem.iid)
    }
  }
}
</script>

<style  scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-white-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
