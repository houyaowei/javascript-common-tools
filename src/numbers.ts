//保留两位小数
export const numFormate = (num:string):string => {
    if (!num) {
      return "0.00";
    }
    num = num.toString().replace(",", "");
    num = Number(num).toFixed(2);
    let res = num.toString().replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    });
    return res;
  }

  //1,2000.00 => 12000.00
  export const formatStrToNum =  (str:string):number => {
    if (!str) {
      return 0;
    }
    const strNum = str.toString().replace(/\,/g, "");
    return isNaN(Number(strNum)) ? 0 : Number(strNum);
  }
  
  //数字转汉字
  export const getChinaNum = (num:string): string|void => {
    let n:number = Number(num);
    if (!Number.isInteger(n) && n < 0) {
      return;
    }
    const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    const positions = [
      "",
      "十",
      "百",
      "千",
      "万",
      "十万",
      "百万",
      "千万",
      "亿",
      "十亿",
      "百亿",
      "千亿",
    ];
    const charArray = String(n).split("");
    let result = "";
    let prevIsZero = false;
    //处理0  deal zero
    for (let i = 0; i < charArray.length; i++) {
      const ch = charArray[i];
      if (ch !== "0" && !prevIsZero) {
        result += digits[parseInt(ch)] + positions[charArray.length - i - 1];
      } else if (ch === "0") {
        prevIsZero = true;
      } else if (ch !== "0" && prevIsZero) {
        result +=
          "零" + digits[parseInt(ch)] + positions[charArray.length - i - 1];
      }
    }
    //处理十 deal ten
    if (n < 100) {
      result = result.replace("一十", "十");
    }
    return result;
  }

  //四舍五入保留两位小数
  export const keepTwoDecimal = (num:string): number | boolean => {
    let resultNum = parseFloat(num);
    if (isNaN(resultNum)) {
      return false;
    }
    resultNum = Math.round(Number(num) * 100) / 100;
    return resultNum;
  }
  //超过阈值显示 num+
  export const outOfNum = (val:number, maxNum:number) =>{
    val = val ? val-0 : 0;
    if (val > maxNum ) {
      return `${maxNum}+`
    }else{
      return val;
    }
  };
