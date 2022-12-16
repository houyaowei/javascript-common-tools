import { telDesensitization,isLandLinePhone,isMobile } from "../src/telephone"

describe("common utils test cases", ()=> {
    test("tel desensitization test", ()=> {
        expect(telDesensitization('',6)).toEqual("******")
        expect(telDesensitization('13599992345',3)).toEqual("135****345")
        expect(telDesensitization('13599992345',4)).toEqual("135****2345")
    })
    test("isLandLinePhone test", ()=> {
        expect(isLandLinePhone("029-88368834")).toBeTruthy()
        expect(isLandLinePhone("02988368834")).toBeTruthy()
    })
    test("isMobile test", ()=> {
        expect(isMobile("18191976090")).toBeTruthy()
        expect(isMobile("1819197609")).toBeFalsy()
        expect(isMobile("02988368834")).toBeFalsy()
    })
 })