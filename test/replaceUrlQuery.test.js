
/**
 * @jest-environment jsdom
 */
import { util } from "../index";
const { replaceUrlQuery } = util || {};

// demo1 替换数字
test('替换数字', () => {
    expect(replaceUrlQuery('https://www.test.com/abc?a=111', 'a', '222'))
    .toBe('https://www.test.com/abc?a=222')
})

// demo2 替换数字和字母
test('替换数字和字母', () => {
    expect(replaceUrlQuery('https://www.test.com/abc?b=abc111&c=3333', 'b', 'a222'))
    .toBe('https://www.test.com/abc?b=a222&c=3333')
})


// demo3 替换已编码url
test('替换已编码url', () => {
    expect(replaceUrlQuery('https://www.test.com/abc?b=abc111&from=https%3A%2F%2Fwww.test.com%2Fabc&c=3333', 'from', 'hello'))
    .toBe('https://www.test.com/abc?b=abc111&from=hello&c=3333')
})


// demo4 替换hash路由的参数
test('替换已编码url', () => {
    expect(replaceUrlQuery('https://www.test.com/abc#test?b=abc111&from=https%3A%2F%2Fwww.test.com%2Fabc&c=3333', 'from', 'hello'))
    .toBe('https://www.test.com/abc#test?b=abc111&from=hello&c=3333')
})

// demo5 替换_ - | . )等带特殊符号
const url5 = 'https://www.test.com/abc#test?b=abc.111&c=33|33&d=aaa_444&e=eee-eee&f=o(o)o';
test('替换_ - | . )等带特殊符号', () => {
    expect(replaceUrlQuery(url5, 'b', 'hello'))
    .toBe('https://www.test.com/abc#test?b=hello&c=33|33&d=aaa_444&e=eee-eee&f=o(o)o')
    expect(replaceUrlQuery(url5, 'c', 'c'))
    .toBe('https://www.test.com/abc#test?b=abc.111&c=c&d=aaa_444&e=eee-eee&f=o(o)o')
    expect(replaceUrlQuery(url5, 'd', 'd'))
    .toBe('https://www.test.com/abc#test?b=abc.111&c=33|33&d=d&e=eee-eee&f=o(o)o')
    expect(replaceUrlQuery(url5, 'e', 'e'))
    .toBe('https://www.test.com/abc#test?b=abc.111&c=33|33&d=aaa_444&e=e-eee&f=o(o)o')
    expect(replaceUrlQuery(url5, 'f', 'f'))
    .toBe('https://www.test.com/abc#test?b=abc.111&c=33|33&d=aaa_444&e=eee-eee&f=f')
})