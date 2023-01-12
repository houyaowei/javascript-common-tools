import { trim, arrayFlatten, checkPassworld,isChinese, isAllChinese, camelCase, capitalize } from "../src/app"

describe("app test cases", ()=> {
    test("trim cases", ()=> {
        expect(trim("hello world")).toEqual("helloworld")
        expect(trim(" hello world ")).toEqual("helloworld")
    })
    test("arrayFlatten cases", ()=> {
        expect(arrayFlatten([1,[2],[[3],4]])).toEqual([1,2,3,4])
    })
    test("checkPassworld cases", ()=> {
        expect(checkPassworld(["as12$"])).toBeFalsy()
        expect(checkPassworld(["as12AR$"])).toBeTruthy()
        expect(checkPassworld(["mn12AR$&"])).toBeTruthy()
        expect(checkPassworld(["as129$"])).toBeFalsy()
        expect(checkPassworld(["as129$jdddnde2288"])).toBeFalsy()
    })
    test("isChinese cases", ()=> {
        expect(isChinese("as")).toBeFalsy()
        expect(isChinese("你好")).toBeTruthy()
    })
    test("isAllChinese cases", ()=> {
        expect(isAllChinese("as")).toBeFalsy()
        expect(isAllChinese("你好")).toBeTruthy()
        expect(isAllChinese("wq你好")).toBeFalsy()
        expect(isAllChinese("你好wq")).toBeFalsy()
    })
    test("camelCase cases", ()=>{
        expect(camelCase('camel case')).toEqual("camelCase")
        expect(camelCase('camel case case')).toEqual("camelCaseCase")
        expect(camelCase('foo Bar')).toEqual("fooBar")
        expect(camelCase('foo-bar--')).toEqual("fooBar")
        expect(camelCase('foo_bar__')).toEqual("fooBar")
    })
    test("capitalize cases", ()=>{
        expect(capitalize('camel')).toEqual("Camel")
        expect(capitalize('camel case')).toEqual("Camel Case")
        expect(capitalize('camel case case')).toEqual("Camel Case Case")
        expect(capitalize('hello world')).toEqual("Hello World")
    })
})