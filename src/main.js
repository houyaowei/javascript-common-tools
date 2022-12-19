import { formatMonthAndDay, dateFormat, generatorDate } from "./time"
import { telDesensitization, isLandLinePhone, isMobile } from "./telephone"
import { generatorUUID,trim, arrayFlatten, checkPassworld,isChinese, isAllChinese } from "./app"
import { getQueryParams, isURL } from "./urls"
import { numFormate,formatStrToNum, getChinaNum,keepTwoDecimal,outOfNum } from "./numbers"
import { isPDF, sizeConvert } from "../src/file"
import { escapeHTML,unescapeHTML } from "./html"

export {
    formatMonthAndDay,
    dateFormat,
    generatorDate,
    telDesensitization,
    isMobile,
    isLandLinePhone,
    generatorUUID,
    getQueryParams,
    numFormate,
    formatStrToNum,
    getChinaNum,
    keepTwoDecimal,
    trim,
    arrayFlatten,
    isURL,
    isPDF,
    sizeConvert,
    checkPassworld,
    unescapeHTML,
    escapeHTML,
    outOfNum,
    isChinese,
    isAllChinese
}