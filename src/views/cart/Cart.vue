<template>

  <div id="cart">
    <nav-bar class="car-nav">
      <div slot="center">购物车({{cLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom></cart-bottom>
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import CartBottom from './chidComps/CartBottom.vue'
  import CartList from './chidComps/CartList.vue'
  export default {
    name: 'Cart',
    components:{NavBar, CartList, CartBottom},
    props:{},
    data(){
      return {
      }
    },
    watch:{},
    computed:{ //mapGetters辅助函数将vueX中getters直接映射到组件compued中
      //...mapGetters(['cartLength'])
      ...mapGetters({
        cLength: 'cartLength'
      })
    },
  }
</script>
  
<style lang="css" scoped>
  .car-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>