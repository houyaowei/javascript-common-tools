export const generatorUUID =  () => {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

export const trim = (str) => {
  if (!str) {
    return "";
  }
  return str.replace(/\s*/g, "");
}

export const arrayFlatten = (arr) =>
  arr.reduce(
    (a, v) => a.concat(Array.isArray(v) ? arrayFlatten(v) : v),
    []
  )
/**
 * 
 * @param {*} pass 
 * 最短6位，最长16位 {6,16}
  必须包含1个数字
  必须包含2个小写字母
  必须包含2个大写字母
  必须包含1个特殊字符
 */
export const checkPassworld = (pass)=> {
  if(!pass) {
    return false
  }
  const pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).{6,16}$/;
  return pattern.test(pass)  
}
//判断是否是中文
export const isChinese = (str) => { 
  const reg =/^[\u4e00-\u9fa5]/; 
  return reg.test(str)
}
export const isAllChinese = (str) => { 
  const reg =/^[\u4e00-\u9fa5]+$/; 
  return reg.test(str)
}

/**
 * 驼峰转换
 * @param {*} string 
 * @returns 
 */
export const camelCase = (string) => {
  const camelCaseRegex = /[-_\s]+(.)?/g
  return string.replace(camelCaseRegex, (match, char) => {
    return char ? char.toUpperCase() : ''
  })
}

/**
 * 首字母小写转大写
 * @param {*} string 
 * @returns 
 */
export const capitalize = (string) => {
  const capitalizeRegex = /(?:^|\s+)\w/g
  return string.toLowerCase().replace(capitalizeRegex, (match) => match.toUpperCase())
}