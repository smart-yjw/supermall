import axios from 'axios'

/** 根据axios封装的请求方法*/
export function request (config) {

  //创建axios实例
  const instance = axios.create ({
    baseURL: 'http://152.136.185.210:7878/api/m5',
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