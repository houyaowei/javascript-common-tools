  export const telDesensitization =  (str, count) => {
    if (!str) {
      return "*".repeat(count);
    }
    return str.slice(0, 3) + "****" + str.slice(str.length - count);
  }

  export const isLandLinePhone = (v)=>{
    const reg = /^\d{3,4}[-]?\d{7,8}$/
    if (!reg.test(v)) {
      return false;
    }
    return true
  }

  export const isMobile = (val) =>{
    const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return phoneReg.test(val)
  }