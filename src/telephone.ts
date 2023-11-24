  export const telDesensitization =  (str:string, count:number):string => {
    if (!str) {
      return "*".repeat(count);
    }
    return str.slice(0, 3) + "****" + str.slice(str.length - count);
  }

  export const isLandLinePhone = (v:string):boolean=>{
    const reg = /^\d{3,4}[-]?\d{7,8}$/
    if (!reg.test(v)) {
      return false;
    }
    return true
  }

  export const isMobile = (val:string):boolean =>{
    const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return phoneReg.test(val)
  }