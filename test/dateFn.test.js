/**
 * @jest-environment jsdom
 */
import {dateFn} from "../index";

const clearTime = dateFn.clearTime;
// Demo
test('clearTime', () => {
    expect(+clearTime(new Date('2021-03-03 03:03:33'))).toBe(+new Date('2021-03-03 00:00:00'))
})

const addDays = dateFn.addDays;
test('add -1 day', () => {
    expect(+addDays(new Date('2021-03-03 03:03:33'), -1)).toBe(+new Date('2021-03-02 03:03:33'))
})
test('add 0 day', () => {
    expect(+addDays(new Date('2021-03-03 03:03:33'), 0)).toBe(+new Date('2021-03-03 03:03:33'))
})
test('add 1 day', () => {
    expect(+addDays(new Date('2021-03-03 03:03:33'), 1)).toBe(+new Date('2021-03-04 03:03:33'))
})
test('add 1 day 闰年', () => {
    expect(+addDays(new Date('2008-02-28 03:03:33'), 1)).toBe(+new Date('2008-02-29 03:03:33'))
})
test('add 2 day', () => {
    expect(+addDays(new Date('2021-03-03 03:03:33'), 2)).toBe(+new Date('2021-03-05 03:03:33'))
})
test('add 2 day string', () => {
    expect(+addDays(new Date('2021-03-03 03:03:33'), '2')).toBe(+new Date('2021-03-05 03:03:33'))
})

const addMonths = dateFn.addMonths;
test('add 1 month string', () => {
    expect(+addMonths(new Date('2021-03-03 03:03:33'), '1')).toBe(+new Date('2021-04-03 03:03:33'))
})

const firstDayOfMonth = dateFn.firstDayOfMonth
test('firstDayOfMonth', () => {
    expect(+firstDayOfMonth(new Date('2021-03-03 03:03:33'))).toBe(+new Date('2021-03-01 03:03:33'))
})

// const today = dateFn.today;
// test('today', () => {
//     expect(+today()).toBe(+new Date('2021-09-25 00:00:00'))
// })


const cloneDate = dateFn.clone;
test('cloneDate', () => {
    const date1 = new Date('2021-09-09 11:11:11');
    const date2 = cloneDate(date1)
    date1.setFullYear('2020')
    expect(date2.getTime()).toBe(1631157071000)
    expect(date1.getTime()).toBe(1599621071000)
})

const format = dateFn.format;
test('format', () => {
    expect(format(1631157071000, 'yyyy-MM-dd hh:mm:ss')).toBe('2021-09-09 11:11:11')
    expect(format(1631157071000, 'yyyy-MM-dd')).toBe('2021-09-09')
    expect(format(1631157071000, 'hh:mm:ss')).toBe('11:11:11')
    expect(format(1631157071000, 'hh:mm')).toBe('11:11')
    expect(format(1631157071000, 'yyyy-MM-dd hh:mm:ss www')).toBe('2021-09-09 11:11:11 星期四')
    expect(format(1633749071000, 'yyyy-MM-dd hh:mm:ss www')).toBe('2021-10-09 11:11:11 星期六')
})

const dayDiff = dateFn.dayDiff;
test('dayDiff', () => {
    expect(dayDiff(new Date(1631157071000), new Date(1633749071000))).toBe(30)
})

const compareDate = dateFn.compareDate;
test('compareDate', () => {
    expect(compareDate('2021-09-09', '2021-08-08')).toBe(2764800000)
})

const DateDiff = dateFn.DateDiff;
test('DateDiff', () => {
    expect(DateDiff('n','2021-09-09', '2021-08-08')).toBe(1)
    expect(DateDiff('d','2021-09-09', '2021-08-08')).toBe(32)
})

const getSimpleTime = dateFn.getSimpleTime;
test('getSimpleTime', () => {
    expect(getSimpleTime('2021-09-09 11:11')).toBe('11:11')
    expect(getSimpleTime('2021-09-09 12:12')).toBe('12:12')
})

const isLeap = dateFn.isLeap;
test('isLeap', () => {
    expect(isLeap(new Date('2021-09-09 11:11'))).toBe(false)
    expect(isLeap(new Date('2008-09-09 11:11'))).toBe(true)
})

const getHMS = dateFn.getHMS;
test('getHMS', () => {
    const aa = getHMS((new Date('2021-09-13 11:11') - new Date('2021-09-09 11:11'))/1000, true);
    console.log(aa)
    expect(aa).toEqual({day:4, hour:'00', min:'00', sec:'00'})
})





