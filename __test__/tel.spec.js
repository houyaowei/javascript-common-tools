import { telDesensitization } from "../src/telephone"

describe("common utils test cases", ()=> {
    test("tel desensitization test", ()=> {
        expect(telDesensitization('',6)).toEqual("******")
        expect(telDesensitization('13599992345',3)).toEqual("135****345")
        expect(telDesensitization('13599992345',4)).toEqual("135****2345")
    })
 })