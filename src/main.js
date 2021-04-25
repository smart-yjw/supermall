import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

//导入封装的toast
import toast from 'components/common/toast'
//解决移动端300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//安装图片懒加载插件
Vue.use(VueLazyload, {
  loading: '' //加载时图片地址
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
