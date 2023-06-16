/**
 * 如果参数小于10，返回0x
 * @param {*} num 
 */
export const lt = (num)=> {
    return num.length < 2 ? '0'+ num : num
}

/**
 * 函数防抖，支持取消
 * @param {*} fn: 要执行的函数，默认500
 * @param {*} delay : 延迟的毫秒数，默认500毫秒
 * @param {*} immediate ： 是否立即执行，默认是false
 * @returns 
 */
export const debounce = (fn, delay=500, immediate = false)=>{
  let timer = null
  let isInvoke = false
  let context = this;
  const _debounce = function(...args) {
    return new Promise((resolve, reject) => {
      if (timer){
        clearTimeout(timer)
      }
      if (immediate && !isInvoke) {
        const result = fn.apply(context, args)
        resolve(result)
        isInvoke = true
      } else {
        timer = setTimeout(() => {
          const result = fn.apply(context, args)
          resolve(result)
          isInvoke = false
          timer = null
        }, delay)
      }
    })
  }
  _debounce.cancel = function() {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }
  return _debounce
}

/**
 * 函数节流
 * @param {*} fn :执行的函数
 * @param {*} interval :间隔时间，默认500毫秒
 * @param {*} options : leading首次是否执行，trailing最后结束触发
 * @returns 
 */
export const throttle = (fn, interval=500, options = { leading: true, trailing: false }) => {
  const { leading, trailing } = options
  let lastTime = 0
  let timer = null
  let context = this;
  const _throttle = function(...args) {
    return new Promise((resolve, reject) => {
      const nowTime = new Date().getTime()
      if (!lastTime && !leading) {
        lastTime = nowTime
      }
      const remainTime = interval - (nowTime - lastTime)
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        const result = fn.apply(context, args)
        resolve(result)
        lastTime = nowTime
        return
      }

      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null
          lastTime = !leading ? 0: new Date().getTime()
          const result = fn.apply(context, args)
          resolve(result)
        }, remainTime)
      }
    })
  }
  _throttle.cancel = function() {
    if(timer){
      clearTimeout(timer)
      timer = null
      lastTime = 0
    } 
  }
  return _throttle
}