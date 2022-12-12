/**
 * 如果参数小于10，返回0x
 * @param {*} num 
 */
export const lt = (num)=> {
    return num.length < 2 ? '0'+ num : num
}