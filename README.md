##  javascript-common-tools

javascript 常用工具方法整理，欢迎提交 merge request。
<br/>
<br/>

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
  ```javascript
    日期格式化提供两个方法，dateFormat 和 formatMonthAndDay，其中 formatMonthAndDay 主要格式化为 12-12 格式，而dateFormat 则可以提供更加灵活的生成方式。formatMonthAndDay(dateStr). dateStr: 字符串格式，  2022-02-13或者2022-02-13 12:23:09
    dateFormat(date, pattern) date: 日期字符串， pattern：生成日期的格式，如 yyyyMMddhhmmss，yyyyMMdd，MM-dd， hh:mm 等
  ```


 ## 工具方法会持续补充 