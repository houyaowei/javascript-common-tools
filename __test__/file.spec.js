import { isPDF } from "../src/file"

describe("file test", ()=> {
    test("isPDF cases", ()=> {
        expect(isPDF("https://jestjs.io/docs/expect/doc.pdf")).toBeTruthy()
    })
})