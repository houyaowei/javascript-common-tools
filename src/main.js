import { formatMonthAndDay, dateFormat, generatorDate } from "./time"
import { telDesensitization, isLandLinePhone, isMobile } from "./telephone"
import { generatorUUID,trim, arrayFlatten } from "./app"
import { getQueryParams, isURL } from "./urls"
import { numFormate,formatStrToNum, getChinaNum,keepTwoDecimal } from "./numbers"
import { isPDF } from "../src/file"

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
    isPDF
}