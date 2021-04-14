import axios from 'axios'

export function request (config) {

  //创建axios实例
  const instance = axios.create ({
    baseURL: '',
    timeout: 5000
  })

  //axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  //发送网络请求
  return instance(config)

}