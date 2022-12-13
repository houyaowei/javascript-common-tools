import { trim, arrayFlatten } from "../src/app"

describe("app test cases", ()=> {
    test("trim cases", ()=> {
        expect(trim("hello world")).toEqual("helloworld")
        expect(trim(" hello world ")).toEqual("helloworld")
    })
    test("arrayFlatten cases", ()=> {
        expect(arrayFlatten([1,[2],[[3],4]])).toEqual([1,2,3,4])
    })
})