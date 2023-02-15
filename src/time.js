//时间工具方法
import { lt } from "./utils"
/**
 * 入参：
 * @param {*} dateStr ,格式2022-02-13或者2022-02-13 12:23:09
 * @returns 02-13
 */
export const formatMonthAndDay = (dateStr) => {
    if (!dateStr) {
      return "";
    }
    let res = dateStr.match(/(\d{4})[-](\d{1,2})[-](\d{1,2})/)
    //0:全匹配 1:年 2:月 3:日
    if(res.length == 4) {
      return lt(res[2]) + '-' + lt(res[3])
    }
    return "";
  }

export const dateFormat= (date, _pattern) => {
  let _date;
  // 判断date是不是日期对象
  if (date instanceof Date) {
    _date = date;
  }else{
    _date = new Date(date);
  }
  const o = {
    "M+": _date.getMonth() + 1, // 月份
    "d+": _date.getDate(), // 日
    "h+": _date.getHours(), // 小时
    "m+": _date.getMinutes(), // 分
    "s+": _date.getSeconds(), // 秒
    "q+": Math.floor((_date.getMonth() + 3) / 3), // 季度
    S: _date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(_pattern)) {
    _pattern = _pattern.replace(
      RegExp.$1,
      (_date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(_pattern)) {
      _pattern = _pattern.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? o[k]
          : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return _pattern;
}
/**
 * 生成标准的时间串
 * 2022-12-12 14:26:27
 * 2022-02-02 14:07:34
 */
export const generatorDate = (showHMS = true)=> {
  let _date = new Date();
  const _year = _date.getFullYear()
  const _moth = lt(_date.getMonth()+1)
  const _day = lt(_date.getDate())
  const _hour = lt(_date.getHours())
  const _min = lt(_date.getMinutes())
  const _sec = lt(_date.getSeconds())
  if(showHMS) {
    return _year+ "-" + _moth + "-" + _day + " " + _hour + ":" + _min + ":" + _sec
  }
  return _year+ "-" + _moth + "-" + _day
}
/**
 * 格式化时间，转化为几分钟(秒、星期、月、年)前
 * @returns 
 */
export const timeFormat = ()=>{
  const mistiming = Math.round((Date.now() - timestamp) / 1000);
  const arrr = ['年', '个月', '星期', '天', '小时', '分钟', '秒'];
  const arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i < arrn.length; i++) {
    const inm = Math.floor(mistiming / arrn[i]);
      if (inm != 0) {
          return inm + arrr[i] + '前';
      }
  }
}