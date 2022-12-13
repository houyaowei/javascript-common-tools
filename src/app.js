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