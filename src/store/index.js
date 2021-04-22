import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart (state, paload) {
      state.cartList.push(paload)
    }
  },
  actions: {
  },
  modules: {
  }
})
