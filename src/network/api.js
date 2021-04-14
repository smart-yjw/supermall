/**将网路请求封装成方法：*/
import {request} from './request';


//获取轮播图和推荐的数据
export function getHomeMultiData () {
  return request ({
    url: '/home/multidata'
  })
}

//获取商品数据
export function getHomeGoods (type, page) {
  return request ({
    url: '/home/data',
    params: { type, page }
  })
}

//获取商品详情数据
export function getGoodsDetail (iid) {
  return request ({
    url: '/detail',
    params: { iid }
  })
}