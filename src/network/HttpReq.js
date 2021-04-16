//js回调函数方式网络请求
export function _httpReq (options) {

  this.url = options.url
  this.method = options.method
  this.async = options.async || true
  this.data = options.data || ''
  this.ContentType = options.ContentType || 'json'
  this.callback = options.callback

  //创建一个XMLHttpRequest对象
  let xhr = new XMLHttpRequest() 
  //设置xhr请求的超时时间
  xhr.timeout = 5000;
  if (this.method == 'GET'||'get') {
    xhr.open('GET', this.url + '?' + this.data, this.async) //打开一个连接
    xhr.send() //发送请求
  } else {
    xhr.open('POST', this.url, this.async)
    //POST请求时需设置请求头中的Content-Type类型（数据类型）
    xhr.setRequestHeader('Content-Type', this.ContentType)
    xhr.send(this.data) //将数据发送
  }
  //注册事件，监听请求状态
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status >= 200 && status < 300 || status == 304) {
      this.callback(JSON.parse(xhr.response))
    }
  }


}