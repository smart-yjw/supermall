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

//将商品详情中的数据根据组件需要的数据装成一个类，方便将数据传递给组件
//商品信息
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
  }
}
//店铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}
//商品参数
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
//获取详情页的商品推荐
export function getRecommend() {
  return request ({
    url: '/recommend'
  })
}

