/**
 * @jest-environment jsdom
 */
import { util } from "../../../index";
const { replaceUrlQuery } = util || {};

test('替换数字', () => {
    expect(replaceUrlQuery('https://www.test.com/abc?a=111', 'a', '222')).toBe('https://www.test.com/abc?a=222')
})