import { escapeHTML, unescapeHTML } from "../src/html"

describe("html tag escape and unescape test cases", ()=> {
    test("escape cases", ()=> {
        expect(escapeHTML("<")).toEqual("&lt;")
        expect(escapeHTML(">")).toEqual("&gt;")
        expect(escapeHTML("&")).toEqual("&amp;")
        expect(escapeHTML('"')).toEqual("&quot;")
        expect(escapeHTML("'")).toEqual("&apos;")
    })
    test("unescape cases", ()=> {
       expect(unescapeHTML("&lt;")).toEqual("<")
       expect(unescapeHTML("&gt;")).toEqual(">")
       expect(unescapeHTML("&amp;")).toEqual("&")
       expect(unescapeHTML("&quot;")).toEqual('"')
       expect(unescapeHTML("&apos;")).toEqual("'")
    })
 })