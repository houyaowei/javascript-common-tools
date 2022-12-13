import { getQueryParams } from "../src/urls"

describe("url test cases", ()=> {
    test("getQueryParams cases", ()=> {
        const res = getQueryParams("https://developer.mozilla.org/en-US/docs/Web/API/URL_API?name=hyw&age=25&appId=22222&from=mdn")
        expect(res.get("name")).toEqual("hyw")
        expect(res.get("from")).toEqual("mdn")
    })
    
})