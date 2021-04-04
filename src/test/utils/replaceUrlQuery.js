
import { util } from "../../../index";
const { replaceUrlQuery } = util || {};

// demo1
const url1 = 'https://www.test.com/abc?a=111';
const res1 = replaceUrlQuery(url1, 'a', '222')
console.log(res1);
// https://www.test.com/abc?a=222

// demo2
const url2 = 'https://www.test.com/abc?b=abc111&c=3333';
const res2 = replaceUrlQuery(url2, 'b', 'a222')
console.log(res2);
// https://www.test.com/abc?b=a222&c=3333

// demo3
const url3 = 'https://www.test.com/abc?b=abc111&from=https%3A%2F%2Fwww.test.com%2Fabc&c=3333';
const res3 = replaceUrlQuery(url3, 'from', 'hello')
console.log(res3);
// https://www.test.com/abc?b=abc111&from=hello&c=3333


// demo4
const url4 = 'https://www.test.com/abc#test?b=abc111&from=https%3A%2F%2Fwww.test.com%2Fabc&c=3333';
const res4 = replaceUrlQuery(url4, 'from', 'hello')
console.log(res4);
// https://www.test.com/abc#test?b=abc111&from=hello&c=3333