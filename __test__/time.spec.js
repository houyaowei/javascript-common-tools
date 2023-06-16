import { formatMonthAndDay, dateFormat, generatorDate } from "../src/time"

describe("common utils test cases", ()=> {
    test("generator date test", ()=> {
        //因为生成的是当前日期，所以在更新测试用例每次都需要更新expect结果，先注释掉
        // expect(generatorDate(false)).toEqual("2022-12-16")
        // expect(generatorDate()).toContain("2022-12-16")
    })
    test("normal time cases", ()=> {
        expect(formatMonthAndDay("2022-02-13")).toEqual("02-13")
        expect(formatMonthAndDay("2022-12-12 13:40:22")).toEqual("12-12")
        expect(formatMonthAndDay("2022-2-2 13:40:22")).toEqual("02-02")
    })
    test("unnormal time cases", ()=>{
        expect(formatMonthAndDay("2022-12-1213:40:22")).toEqual("12-12")
        expect(formatMonthAndDay("2022-12-213:40:22")).not.toEqual("12-12")
    })
    test("date format test",()=> {
        expect(dateFormat("2022-12-12 13:40:22",'hh:mm')).toEqual('13:40')
        expect(dateFormat("2022-12-12 13:40:22",'MM-dd')).toEqual('12-12')
        expect(dateFormat("2022-12-12 13:40:22",'MM-dd hh:mm')).toEqual('12-12 13:40')
        expect(dateFormat("2022-12-12 13:40:22",'yyyyMMddhhmmss')).toEqual('20221212134022')
        expect(dateFormat("2022-12-12 13:40:22",'yyyyMMdd')).toEqual('20221212')
        expect(dateFormat(new Date(),'yyyyMMdd')).toEqual('20230614')
    })
})