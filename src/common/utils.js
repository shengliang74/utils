// 是否为数组
export function isArray(obj) {
    return Array.isArray(obj)
    // return obj instanceof Array
}

// 是否为对象
export function isObject() {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

// 是否为空对象
export function isEmptyObject(obj) {
    try {
        return JSON.stringify(data) === '{}';
    } catch (e) {
        return false;
    }
};

// 是否为函数
export function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]'
}

// 是否iphoneX
export function isIphonex() {
    const UA = navigator.userAgent;
    return /\s+(m\/9\.1|m\/10\.3|m\/10\.6|m\/11\.2|m\/11\.6)+\s*(\(simulator\))?/ig.test(UA) || /iphonex/i.test(UA)
}

// 判断是否是Iphone+
export function isExtraIphone() {
    // iPhone X、iPhone XS
    const isIPhoneX = /iphone/gi.test(UA) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812;
    // iPhone XS Max
    const isIPhoneXSMax = /iphone/gi.test(UA) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896;
    // iPhone XR
    const isIPhoneXR = /iphone/gi.test(UA) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896;
    return isIPhoneX || isIPhoneXSMax || isIPhoneXR;
}

// 是否为iphone
export function isIphone() {
    return /iphone/gi.test(UA);
}

// 获取手机系统
export function getOSplatform() {
    const ua = navigator.userAgent;
    return {
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1 //android终端
    };
}

// 获取url参数
export function getQueryString(name, url) {
    const reg = new RegExp(`(^|\\?|\\&)${name}=([^&#?]*)([#&?]|$)`, 'i');
    const search = url ? url.substring(url.indexOf('?') + 1) : location.search.substr(1);
    const r = search.match(reg);
    return (r != null) ? decodeURIComponent(r[2]) : null;
}

// 获取url上的参数,返回一个对象
export function getUrlParams(url = location.href) {
    const searchReg = /([^&=?]+)=([^&#?]+)/g;
    const urlParams = {};
    let match;
    let value;
    let name;
    while (match = searchReg.exec(url)) {
        name = match[1];
        value = match[2];
        value = value ? decodeURIComponent(value) : '';
        urlParams[name] = value;
    }
    return urlParams;
}

/**
 解析一个url或者一个url片段
 {
     path: '',
     search: '',
     hash: ''
 }
 */
export function parseUrl(url) {
    if (!url) {
        return {};
    }

    const hashIndex = url.indexOf('#');
    const searchIndex = url.indexOf('?');

    if (hashIndex === -1 && searchIndex === -1) { // 都没有
        return { path: url };
    } else if (searchIndex === -1 || (hashIndex !== -1 && hashIndex < searchIndex)) {
        // 只有hash,或者spa类型的hash
        return {
            path: url.substring(0, hashIndex),
            hash: url.substring(hashIndex + 1)
        };
    } else if (hashIndex === -1) { // 只有search
        return {
            path: url.substring(0, searchIndex),
            search: url.substring(searchIndex + 1)
        };
    }
    // 正常完整的url
    return {
        path: url.substring(0, searchIndex),
        search: url.substring(searchIndex + 1, hashIndex),
        hash: url.substring(hashIndex + 1)
    };
}

// 追加参数，params数据结构需无嵌套
export function appendPlainParams(url, params, forceUpate) {
    const urlObject = parseUrl(url);
    const oldParam = getUrlParams(urlObject.search || '');
    const query = {};

    if (forceUpate) {
        Object.assign(query, oldParam, params);
    } else {
        Object.assign(query, params, oldParam);
    }

    const search = Object.keys(query).map(key => `${key}=${encodeURIComponent(query[key])}`).join('&');
    return `${urlObject.path}?${search}${urlObject.hash ? (`#${urlObject.hash}`) : ''}`;
}

// 获取cookie
export function getCookie(key, cookies) {
    if (!cookies) {
        cookies = document.cookie;
    }

    let value = '';
    if (cookies) {
        const cookieArr = cookies.split('; ');

        for (let i = 0, cookie, index; i < cookieArr.length; i++) {
            cookie = cookieArr[i];
            index = cookie.indexOf('=');

            if (cookie.substr(0, index) === key) {
                value = cookie.substr(index + 1);
            }
        }
    }
    return value;
}

// 获取cookie
export function getCookieFn(name) {
    var bikky = document.cookie || '';
    name += "=";
    var i = 0;
    while (i < bikky.length) {
        var offset = i + name.length;
        if (bikky.substring(i, offset) == name) {
            var endstr = bikky.indexOf(";", offset);
            if (endstr == -1) endstr = bikky.length;
            return unescape(bikky.substring(offset, endstr));
        }
        i = bikky.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

// 给Element添加样式
export function addStyle(obj = {}) {
    const styleMap = {
        backgroundImage: 'url({#backgroundImage})'
    };
    Object.keys(obj).map(item => {
        if (!obj[item]) {
            delete obj[item];
        } else if (styleMap[item]) {
            obj[item] = styleMap[item].replace(/\{#([^}]+)\}/, obj[item]);
        }
    });
    return obj;
}

/**
 * 传入string, 返回首字母大写的string;
 * 字符串未传入或undefined, 返回空字符串
 * @param str
 */
export function firstLetterCapitalize(str) {
    return str ? str.replace(str[0], str[0].toUpperCase()) : '';
}

// 字符串去掉空格
export function stringTrim(str) {
    return (str === undefined || str === null) ? '' : str.replace(/(^\s*)|(\s*$)/g, '').replace(/(^　*)|(　*$)/g, '')
}

// 锁屏
export function lockPage() {
    document.body.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
}

// 解锁屏
export function unLockPage() {
    document.body.removeEventListener('touchmove', e => e.preventDefault());
}

//是否存在中文
export function isHaveChinese(data) {
    return /[\u4e00-\u9fa5]/.test(data) ? true : false;
}

//是否全是中文
export function isChinese(data) {
    return /^[\u4e00-\u9fa5]+$/.test(data) ? true : false;
}

