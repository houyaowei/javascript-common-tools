/**
 * 转义标签
 * @param {*} str 
 * @returns 
 */
export const escapeHTML = (str:string):string =>{
    if(!str){
        return ""
    }
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");;
};
/**
 * 标签反专业
 * @param {*} str 
 * @returns 
 */
export const unescapeHTML = (str:string):string => {
    if(!str){
        return ""
    }
    return str.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}