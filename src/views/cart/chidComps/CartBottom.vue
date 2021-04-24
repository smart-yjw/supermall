<template>

  <div class="bottom-bar">
    <div class="select-all">
      <check-button class="button" :selected="selectAll"
        @click.native="allClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      合计：{{totalPrice}}
    </div>
    <div class="accounts">
      <span>去结算{{cartLength}}</span>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import CheckButton from './CheckButton.vue'
export default {
  name: 'CartBottom',
  components:{CheckButton},
  computed:{
    ...mapGetters(['cartList']),
    totalPrice () { //计算选中商品的总价
      return '￥' + this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    cartLength () { //选中的数量
      return this.cartList.filter(item => item.checked).length
    },
    selectAll () { //全选
      //return this.cartLength === this.cartList.length
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    allClick () {
      console.log('全选')
      if (this.selectAll) {
        this.cartList.forEach(element => element.checked = false);
      } else {
        this.cartList.forEach(element => element.checked = true)
      }
    }
  }
}
</script>
  
<style lang="css" scoped>
  .bottom-bar {
    height: 40px;
    width: 100%;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .select-all {
    display: flex;
    width: 25%;
    align-items: center;
  }
  .button {
    margin: 0 5px;
  }
  
  .accounts {
    display: flex;
    justify-content: center;
    width: 25%;
    height: 100%;
    align-items: center;
    background-color: orangered;
    color: #fff;
  }
  
</style>