
import { util } from "../../../index";
const { replaceUrlQuery } = util || {};

// demo1 替换数字
const url1 = 'https://www.test.com/abc?a=111';
const res1 = replaceUrlQuery(url1, 'a', '222')
console.log(res1);
// https://www.test.com/abc?a=222

// demo2 替换数字和字母
const url2 = 'https://www.test.com/abc?b=abc111&c=3333';
const res2 = replaceUrlQuery(url2, 'b', 'a222')
console.log(res2);
// https://www.test.com/abc?b=a222&c=3333

// demo3 替换已编码url
const url3 = 'https://www.test.com/abc?b=abc111&from=https%3A%2F%2Fwww.test.com%2Fabc&c=3333';
const res3 = replaceUrlQuery(url3, 'from', 'hello')
console.log(res3);
// https://www.test.com/abc?b=abc111&from=hello&c=3333


// demo4 替换hash路由的参数
const url4 = 'https://www.test.com/abc#test?b=abc111&from=https%3A%2F%2Fwww.test.com%2Fabc&c=3333';
const res4 = replaceUrlQuery(url4, 'from', 'hello')
console.log(res4);
// https://www.test.com/abc#test?b=abc111&from=hello&c=3333

// demo5 替换_ - | . )等带特殊符号
const url5 = 'https://www.test.com/abc#test?b=abc.111&c=33|33&d=aaa_444&e=eee-eee&f=o(o)o';
const res5 = replaceUrlQuery(url5, 'b', 'hello')
const res5_2 = replaceUrlQuery(url5, 'c', 'c')
const res5_3 = replaceUrlQuery(url5, 'd', 'd')
const res5_4 = replaceUrlQuery(url5, 'e', 'e')
const res5_5 = replaceUrlQuery(url5, 'f', 'f')
console.log("res5 b", res5); // https://www.test.com/abc#test?b=hello&c=33|33&d=aaa_444&e=eee-eee&f=o(o)o
console.log("res5_2 c", res5_2); // https://www.test.com/abc#test?b=abc.111&c=c&d=aaa_444&e=eee-eee&f=o(o)o
console.log("res5_3 d", res5_3); // https://www.test.com/abc#test?b=abc.111&c=33|33&d=d&e=eee-eee&f=o(o)o
console.log("res5_4 e", res5_4); // https://www.test.com/abc#test?b=abc.111&c=33|33&d=aaa_444&e=e-eee&f=o(o)o
console.log("res5_5 f", res5_5); // https://www.test.com/abc#test?b=abc.111&c=33|33&d=aaa_444&e=eee-eee&f=f