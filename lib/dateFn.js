// 日期的方法，相较于date.js 可直接引用不用初始化

import {isDate} from './utils'

// 清除时分秒
export function clearTime(date){
    const newDate = date;
    if(!isDate(newDate)) return;
    newDate.setHours(0);
    newDate.setMinutes(0);
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);
    return newDate;
}

// 增加天数
export function addDays (date, value) {
    if(!isDate(date)) return; 
    date.setDate(date.getDate() + value * 1);
    return date;
};

// 增加月份
export function addMonths(date, value) {
    if(!isDate(date)) return;
    date.setMonth(date.getMonth() + value * 1);
    return date;
};

// 获取当月第一天
export function firstDayOfMonth (date) {
    if(!isDate(date)) return;
    date.setDate(1);
    return date;
};

// 返回今天日期
export function today() {
    return clearTime(new Date());
};

// 日期克隆
export function clone(date) {
    if(!isDate(date)) return;
    let time = date.getTime();
    return new Date(time);
};

/**
* 格式化时间
* @param date 需要格式化的时间 string 或 number 或 Date
* @param format 格式化 "yyyy-MM-dd hh:mm:ss www"
* @returns {string} 格式化后字符串
*/
export function format(date, format) {
    let newDate = null;
    try {
        if(isDate(date)){
            newDate = date;
        }else if(typeof date === 'string' || typeof date === 'number'){
            newDate = new Date(date);
        }
    }catch(err){
        console.error(err)
    }
    if(!isDate(newDate) || !format) return;
    let o = {
        'M+': newDate.getMonth() + 1,
        'd+': newDate.getDate(),
        'h+': newDate.getHours(),
        'm+': newDate.getMinutes(),
        's+': newDate.getSeconds(),
        'q+': Math.floor((newDate.getMonth() + 3) / 3),
        'S': newDate.getMilliseconds()
    };
    let w = [
        ['日', '一', '二', '三', '四', '五', '六'],
        ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    ];
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    if (/(w+)/.test(format)) {
        format = format.replace(RegExp.$1, w[RegExp.$1.length - 1][newDate.getDay()]);
    }
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        }
    }
    return format;
};

/**
* 计算间隔时间
* @param {Date} date1 日期
* @param {Date} date2  日期
* @returns {number} 两个日期天数差
*/
export function dayDiff(date1, date2) {
    try {
        date1.getYear();
        date2.getYear();
    }
    catch (e) {
        return (0);
    }
    let base = 24 * 60 * 60 * 1000;
    let result = Math.abs(date1 - date2) / base;
    return (parseInt(result, 10));
};


/**
 * 比较时间
 * @param  {string} date1 日期
 * @param  {string]} date2 日期
 * @return {number} 两个日期毫秒
 */
export function compareDate (date1, date2) {
    date1 = new Date(date1.replace(/\-/g, '\/'));
    date2 = new Date(date2.replace(/\-/g, '\/'));
    return date1 - date2;
};

/**
 * 日期差值比较
 * @param {string} interval 比较的日期差值类型
 * @param {string|number} date1 日期
 * @param {string|number} date2 日期
 * @return {number} 日期差
*/
export function DateDiff(interval, date1, date2) {
    function TimeCom(dateValue) {
        let newCom = new Date(dateValue);
        this.year = newCom.getFullYear();
        this.month = newCom.getMonth() + 1;
        this.day = newCom.getDate();
        this.hour = newCom.getHours();
        this.minute = newCom.getMinutes();
        this.second = newCom.getSeconds();
        this.msecond = newCom.getMilliseconds();
        this.week = newCom.getDay();
    }

    let TimeCom1 = new TimeCom(date1);
    let TimeCom2 = new TimeCom(date2);
    let result;
    switch (String(interval).toLowerCase()) {
        case "y":
        case "year":
            result = TimeCom1.year - TimeCom2.year;
            break;
        case "n":
        case "month":
            result = (TimeCom1.year - TimeCom2.year) * 12 + (TimeCom1.month - TimeCom2.month);
            break;
        case "d":
        case "day":
            result = Math.round((Date.UTC(TimeCom1.year, TimeCom1.month - 1, TimeCom1.day) - Date.UTC(TimeCom2.year, TimeCom2.month - 1, TimeCom2.day)) / (1000 * 60 * 60 * 24));
            break;
        case "h":
        case "hour":
            result = Math.round((Date.UTC(TimeCom1.year, TimeCom1.month - 1, TimeCom1.day, TimeCom1.hour) - Date.UTC(TimeCom2.year, TimeCom2.month - 1, TimeCom2.day, TimeCom2.hour)) / (1000 * 60 * 60));
            break;
        case "m":
        case "minute":
            result = Math.round((Date.UTC(TimeCom1.year, TimeCom1.month - 1, TimeCom1.day, TimeCom1.hour, TimeCom1.minute) - Date.UTC(TimeCom2.year, TimeCom2.month - 1, TimeCom2.day, TimeCom2.hour, TimeCom2.minute)) / (1000 * 60));
            break;
        case "s":
        case "second":
            result = Math.round((Date.UTC(TimeCom1.year, TimeCom1.month - 1, TimeCom1.day, TimeCom1.hour, TimeCom1.minute, TimeCom1.second) - Date.UTC(TimeCom2.year, TimeCom2.month - 1, TimeCom2.day, TimeCom2.hour, TimeCom2.minute, TimeCom2.second)) / 1000);
            break;
        case "ms":
        case "msecond":
            result = Date.UTC(TimeCom1.year, TimeCom1.month - 1, TimeCom1.day, TimeCom1.hour, TimeCom1.minute, TimeCom1.second, TimeCom1.msecond) - Date.UTC(TimeCom2.year, TimeCom2.month - 1, TimeCom2.day, TimeCom2.hour, TimeCom2.minute, TimeCom2.second, TimeCom1.msecond);
            break;
        default:
            result = "invalid";
    }
    return (result);
}


/**
 * 长时间转换为短时间格式 2021-09-09 11:10:10 → 11:10
 * @param {*} time
 * @param {bool} hasZero 是否补0
 * @returns rtn
 */
export function getSimpleTime (time, hasZero) {
    time = new Date(time.replace('T', ' ').replace(/-/g, '/'));
    let h = parseInt(time.getHours(), 10),
        m = parseInt(time.getMinutes(), 10),
        rtn = null;

    if (hasZero) {
        h < 10 && (h = '0' + h);
        m < 10 && (m = '0' + m);
        rtn = h + ':' + m;
    } else {
        rtn = h + ':' + m;
    }

    return rtn;
}

/**
 * 判断是否闰年
 * @param year
 * @returns {boolean}
 */
export function isLeap(date) {
    if(!isDate(date)){
        return
    }
    const year = date.getFullYear();
    return (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
}

/**
* 获取时分秒
* @param time 两个时间的差值,以秒为单位
* @param isNeedDay 是否需要天
* @returns {Object} 包含 天 小时 分 秒 的对象
*/
export function getHMS(time, isNeedDay) {
    let day = 0, hour = 0, min = 0, sec = 0;
    if (Number.isNaN(time) || typeof time !== 'number') {
        return time
    }
    time = Math.abs(time);
    day = Math.floor(time / (24 * 60 * 60));
    hour = Math.floor((time - day * 24 * 60 * 60) / (60 * 60));
    min = Math.floor((time - day * 24 * 60 * 60 - hour * 60 * 60) / 60);
    sec = Math.floor(time - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);
    if (!isNeedDay) {
        day = 0;
        hour = hour + day * 24;
    }
    hour = hour < 10 ? '0' + hour : hour;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    return { day, hour, min, sec };
}