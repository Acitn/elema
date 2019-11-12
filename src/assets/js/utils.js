// let timeout = null

//防抖   停止操作 等待wait时间再执行 
// function debounce(fn, wait) { 
// 	debugger
//   if(timeout !== null) clearTimeout(timeout)
//   timeout = setTimeout(fn, wait)
// }

//节流 间隔delay时间再执行
function throttle(fn, delay) { 
  var prev = Date.now()         
  return function() {               
    var now = Date.now()               
    if (now - prev > delay) {                   
      fn()                
      prev = Date.now()             
    }         
  }       
}       
// export {debounce,throttle}
 export default {throttle}
// export default {debounce} //默认只能一个
