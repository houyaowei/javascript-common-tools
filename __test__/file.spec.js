import { isPDF, sizeConvert } from "../src/file"

describe("file test", ()=> {
    test("isPDF cases", ()=> {
        expect(isPDF("https://jestjs.io/docs/expect/doc.pdf")).toBeTruthy()
    })
    test("sizeConvert cases", ()=> {
        expect(sizeConvert()).toEqual("0B")
        expect(sizeConvert(2000)).toEqual("1.95KB")
        expect(sizeConvert(2000000)).toEqual("1.91MB")
        expect(sizeConvert(2000000000)).toEqual("1.86GB")
    })
})