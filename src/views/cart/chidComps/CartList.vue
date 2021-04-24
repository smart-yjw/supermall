<template>

  <div class="cart-container">
     <scroll class="cart-list" ref="scroll">
       <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"></cart-list-item>
     </scroll>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem.vue'

  export default {
  neme: 'CartList',
  components: { Scroll, CartListItem },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated () {
      //console.log('---')
      this.$refs.scroll.refresh()
      //console.log(this.cartList)
    }
  }
</script>

<style  scoped>
  .cart-container {
    height: calc(100vh - 49px - 49px)
  }
  .cart-list {
    height: 100%;
    overflow: hidden;
  }
</style>
