import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  console.log('执行了obj的install')

  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.new一个组件对象
  const toast = new toastConstructor()

  //3.将组件对象挂载到某个元素上
  toast.$mount(document.createElement('div'))

  //4.toast.$el就是对应的div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj