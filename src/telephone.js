export const telDesensitization =  (str, count) => {
    if (!str) {
      return "*".repeat(count);
    }
    return str.slice(0, 3) + "****" + str.slice(str.length - count);
  }