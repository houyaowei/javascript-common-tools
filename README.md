##  javascript-common-tools

javascript工具方法整理，因为懒得再CV了。欢迎补充。
<br/>
<br/>

### 安装
```javascript
yarn add javascript-common-tools

or

npm install javascript-common-tools

or 

pnpm add javascript-common-tools

```

### 引用方法
```javascript
  import {telDesensitization, keepTwoDecimal, getQueryParams, ...} from "javascript-common-tools"
```

### 支持的工具方法如下：

- 电话号码格式化(133*****6564) 
 ``` javascript
  telDesensitization(tel,count)  tel: 要格式化的电话，count:尾号保留的位数
````

- 四舍五入保留两位小数

```javascript
res = keepTwoDecimal(23.2)
console.log(res) // 23.2

res = keepTwoDecimal(23.26)
console.log(res) // 23.26

res = keepTwoDecimal(23.267)
console.log(res) // 23.27

```
- 去空格（去除所有的空格）
  
  ```javascript
  trim(str): str为要去除空格的对象
  ```
- 数组拉平
  
  ```javascript
  let res = arrayFlatten([1,[2],[[3],4]])
  console.log(res.get("name")) //[1,2,3,4]

  ```
- 获得 url 中的请求参数
  
  ```javascript
     const res = getQueryParams("https://developer.mozilla.org/en-US/docs/Web/API/URL_API?name=hyw&age=25&appId=22222&from=mdn")
     console.log(res.get("name")) //hyw
  ```
- 数字千分符
  ```javascript
    let res = numFormate(123456)
    console.log(res) //"123,456.00"
  ```
- 数字千分符串转数字
  ```javascript
   let res = formatStrToNum("123,456.00")
    console.log(res) // 123456.00
  ``` 
- 数字转汉字
  ```javascript
  let res = getChinaNum(122)
  console.log(res) // '一百二十二'
  ```
- 生成uid
  ```javascript
   generatorUUID(): 无参数
  ```
- 生成日期(generatorDate)，格式: 2022-02-13或者2022-02-13 12:23:09
  ```javascript
    generatorDate(showHMS = true), showHMS:是否显示小时、分钟、秒，默认显示
    如果只显示年月日，传入布尔类型的值 false 即可。
  ```

- 格式化月日(dateFormat 和 formatMonthAndDay)  
    日期格式化提供两个方法，dateFormat 和 formatMonthAndDay </br>
    formatMonthAndDay 主要格式化为 12-12 格式 </br>
    dateFormat 则可以提供更加灵活的生成方式。

  ```javascript
    formatMonthAndDay(dateStr). dateStr: 字符串格式，  2022-02-13或者2022-02-13 12:23:09
    dateFormat(date, pattern) date: 日期字符串或者Date实列， pattern：生成日期的格式，如 yyyyMMddhhmmss，yyyyMMdd，MM-dd， hh:mm 等
  ```
- 判断是否是座机
  ```javascript
    isLandLinePhone("029-88368834") // true
    isLandLinePhone("02988368834") //true
  ```
- 判断是否是移动手机号
  ```javascript
    isMobile("18191976090") //true
    isMobile("02988368834") // false
  ```  
- 判断是否是URL
  ```javascript
    isURL("https://jestjs.io/docs/expect")  //true
  ```
- 判断是否是pdf文件
  ```javascript
    isPDF("https://jestjs.io/docs/expect/doc.pdf") //true
  ```
- 校验密码强度
  
  规则: 最短6位，最长16位 {6,16},必须包含1个数字、2个小写字母、2个大写字母、1个特殊字符
  ```javascript
    checkPassworld(["as12$"]) // false
    checkPassworld(["as12AR$"]) // true
    checkPassworld(["mn12AR$&"]) // true
    checkPassworld(["as129$"])   // false
    checkPassworld(["as129$jdddnde2288"]) //false
  ```
- 转义html标签（<,>,&,",'）
  ```javascript
    escapeHTML("<")  // &lt;
    escapeHTML(">")  // &gt;
    escapeHTML("&")  // &amp;
    escapeHTML('"')  // &quot;
    escapeHTML("'")  // &apos;
  ```
- 反转义html标签
  ```javascript
    unescapeHTML("&lt;") //  <
  ```
- 数字超过规定大小加上加号“+
  ```javascript
    outOfNum(100, 66) //66+
    outOfNum(50, 66) //50
  ```
- 大小转化B KB MB GB
  ```javascript
    sizeConvert(2000) //"1.95KB"
    sizeConvert(2000000) //"1.91MB"
    sizeConvert(2000000000) //"1.86GB"
  ```
- 是否是中文
  ```javascript
    isChinese("hello") // false
    isChinese("你") // true
  ```
- 是否全是中文
  ```javascript
    isAllChinese("hello") // false
    isAllChinese("你好") // true
    isAllChinese("qq你好") // false
    isAllChinese("你好qw") // false
  ```
- 驼峰转换
  ```javascript
    camelCase('foo Bar') // fooBar
    camelCase('foo-bar--') // fooBar
  ```
- 首字母小写转大写
  ```javascript
    capitalize('hello world') //Hello World
    capitalize('hello') //Hello
  ```
- 格式化时间，转化为几分钟(秒、小时、天、星期、月、年)前
  ```javascript
   timeFormat(utc毫秒) // xx前
  ```
- 防抖debounce, 参数 fn：要执行的方法, delay：延迟的毫秒数，默认是500， immediate是否立即执行，默认是false
  ```javascript
    const debounceFn = debounce(fn, delay, false)
    debounceFn.apply(上下文, args).then(res => {
        console.log("result:", res)
      })
    }
  ```
- 节流debounce, 参数 fn：要执行的方法, delay：延迟的毫秒数，默认是500， leading首次是否执行，默认是true，trailing是否最后结束触发，默认是false
  ```javascript
    const _throttle = throttle(fn, 3000, { 
      leading: false, 
      trailing: true,
    })
    _throttle.apply(上下文, args).then(res => {
        console.log("result:", res)
      })
    }
  ```  
</br></br></br>
 
 ## todo：工具方法持续补充 
 欢迎提交PR

 ## 更新日志

 [changelog](./changelog.md)