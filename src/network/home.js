import {request} from './request';

//网路请求方法：
export function getHomeMultiData () {
  return request ({
    url: '/home/multidata'
  })
}

export function getHomeGoods (type, page) {
  return request ({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}