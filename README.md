##  javascript-common-tools
javascript 常用工具方法整理，欢迎提交 merge request。

#### 支持的工具方法如下：

- 电话号码格式化(133*****6564) 
 ``` javascript
    telDesensitization(tel,count)  tel: 要格式化的电话，count:尾号保留的位数
````

- 四舍五入保留两位小数

- 去空格
- 数组拉平
- 获得 url 中的请求参数
- 数字千分符
- 数字转汉字
- 小于等于今天
- 大于等于今天
- 生成uid
- 判断浏览器是手机版还是电脑版
- 生成日期(generatorDate)，格式: 2022-02-13或者2022-02-13 12:23:09
```javascript
generatorDate(showHMS = true), showHMS:是否显示小时、分钟、秒，默认显示
如果只显示年月日，传入布尔类型的值 false 即可。
```
- 格式化月日(dateFormat 和 formatMonthAndDay)  
  ```javascript
    日期格式化提供两个方法，dateFormat 和 formatMonthAndDay，其中 formatMonthAndDay 主要格式化为 12-12 格式，而dateFormat 则可以提供更加灵活的生成方式。
formatMonthAndDay(dateStr). dateStr: 字符串格式，  2022-02-13或者2022-02-13 12:23:09
dateFormat(date, pattern) date: 日期字符串， pattern：生成日期的格式，如 yyyyMMddhhmmss，yyyyMMdd，MM-dd， hh:mm 等

  ```