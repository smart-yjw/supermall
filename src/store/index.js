import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: { 
    //mutations唯一的目的就是修改state中状态
    //且mutations的每个方法的功能尽可能要单一
    addCounter (state, oldProduct) {
      oldProduct.count ++ 
    },
    addToCart (state, product) {
      product.checked = true
      state.cartList.push(product)
    }
  },
  actions: {
    addCart (context, product) {
      return new Promise((resolve, reject) => {
        //1.查找cartList中有没有被添加的商品
        let oldProduct = context.state.cartList.find((item) => {
          return item.iid === product.iid
        })
        if(oldProduct){ //有就把数量加1
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量加1')
        }else{ //没有就添加到购物车，并且新添加一个count把数量设为1
          product.count = 1
          context.commit('addToCart', product)
          resolve('添加了新的商品')
        }
      })
    }
  },
  getters: {
    cartList (state) {
      return state.cartList
    },
    cartLength (state) {
      return state.cartList.length
    }
  },
  modules: {
  }
})
