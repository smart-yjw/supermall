export function 
/**debounce防抖函数
* 如果一个函数的触发频率很高，可以将这个函数传入防抖函数中去执行，
* 防抖函数会判断若此函数在短时间内连续不断触发，则会等待延迟时间再去调用
* 比如监听图片的加载，加载一张图片就监听一次，会影响性能
*/
debounce (func, delay=100) {
 let timer = null
 return function (...args) {
   if (timer) clearTimeout(timer)
   timer = setTimeout(() => {
     func.apply(this, args)
   }, delay)
 }
}

export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};