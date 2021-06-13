/**
 * @jest-environment jsdom
 */
import {date} from "../../index";
// init
date();

// Demo
test('test day', () => {
    expect(new Date().dayDiff(new Date('2021-01-01'))).toBeGreaterThan(100)
})
test('test format', () => {
    expect(new Date('2021-01-01').format('yyyy-MM-dd hh:mm:ss www')).toBe('2021-01-01 08:00:00 星期五')
})
