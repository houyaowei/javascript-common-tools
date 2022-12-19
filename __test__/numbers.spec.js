import { numFormate, getChinaNum, keepTwoDecimal, formatStrToNum,outOfNum } from "../src/numbers"

describe("numbers test cases", ()=> {
    test("numFormate cases", ()=> {
        let res = numFormate(123456)
        expect(res).toEqual("123,456.00")
        res = numFormate(1)
        expect(res).toEqual("1.00")
        res = numFormate(-1)
        expect(res).toEqual("-1.00")
    })
    test("getChinaNum cases", ()=> {
        let res = getChinaNum(122)
        expect(res).toEqual('一百二十二')
    })
    test("keepTwoDecimal cases",()=> {
        let res = keepTwoDecimal(23)
        expect(res).toEqual(23)

        res = keepTwoDecimal(23.2)
        expect(res).toEqual(23.2)

        res = keepTwoDecimal(23.26)
        expect(res).toEqual(23.26)

        res = keepTwoDecimal(23.267)
        expect(res).toEqual(23.27)
    })
    test("formatStrToNum cases", ()=> {
        let res = formatStrToNum("123,456.00")
        expect(res).toEqual(123456.00)
    })
    test("outOfNum cases", ()=> {
        expect(outOfNum(100, 66)).toEqual("66+")
        expect(outOfNum(50, 66)).toEqual(50)
    })
})