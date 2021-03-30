import {request} from './request';

//API

export function getHomeMultiData () {
  return request ({
    url: '/home/multidata'
  })
}