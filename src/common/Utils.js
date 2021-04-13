export function 
/**debounce防抖函数
* 如果直接执行refresh,那么refrsh函数执行频率就很高
* 可以将refresh函数传入debounce函数中，生成一个新的函数
* 降低了图片加载后的refresh函数的调用频率
*/
debounce (func, delay) {
 let timer = null
 return function (...args) {
   if (timer) clearTimeout(timer)
   timer = setTimeout(() => {
     func.apply(this, args)
   }, delay)
 }
}