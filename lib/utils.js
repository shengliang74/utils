// 是否为数组
export function isArray(obj) {
    return Array.isArray(obj)
    // return obj instanceof Array
}

// 是否为对象
export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

// 是否为时间
export function isDate(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]'
}

// 是否字符串
export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
}

// 是否为空对象
export function isEmptyObject(data) {
    try {
        return JSON.stringify(data) === '{}';
    } catch (e) {
        return false;
    }
};

// 是否为undefined
export function isUndefined(data) {
    return typeof data === 'undefined';
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
    const UA = navigator.userAgent;
    return /iphone/gi.test(UA);
}

// 判断ios终端
export function isIos() {
    let u = navigator.userAgent
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

// 判断Android终端
export function isAndroid() {
    let u = navigator.userAgent
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
}

// 是否为浏览器环境
export function isInBrowser(){
    return typeof window !== 'undefined';
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


/**
 * 传入string, 返回首字母大写的string;
 * 字符串未传入或undefined, 返回空字符串
 * @param str
 */
export function firstLetterCapitalize(str) {
    return str ? str.replace(str[0], str[0].toUpperCase()) : '';
}

// 字符串去掉首尾空格
export function stringTrim(str) {
    return (str === undefined || str === null) ? '' : str.replace(/(^\s*)|(\s*$)/g, '').replace(/(^　*)|(　*$)/g, '')
}

// 字符串去掉首尾空格
export function trim(str){
    if(str === undefined || str === null){
        return ''
    }
    str.replace(/\s+/,'').replace(/\s+$/,'');
}
// 去除首空格
export function trimStart(str){
    if(str === undefined || str === null){
        return ''
    }
    str.replace(/\s+/,'');
}

// 去除尾空格
export function trimEnd(str){
    if(str === undefined || str === null){
        return ''
    }
    str.replace(/\s+$/,'');
}

// 锁屏
export function lockPage() {
    document.body.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
}

// 解锁屏
export function unLockPage() {
    document.body.removeEventListener('touchmove', e => e.preventDefault());
}

// json转arr
export function transJsonToArr(json, keyName, valueName) {
    let arr = [];
    keyName = keyName || 'key';
    valueName = valueName || 'value';

    if (isObject(json) && !isEmptyObject(json)) {
        for (let key in json) {
            if (json.hasOwnProperty(key)) {
                let j = {};
                j[keyName] = key;
                j[valueName] = json[key];
                arr.push(j)
            }
        }
    }
    return arr
}

// 下载文件
export function downFile(url, params, target="_blank") {
    let search = null, href = null;
    if (isObject(params) && !isEmptyObject(params)) {
        search = Object.keys(params).map(key => `${key}=${encodeURIComponent(isUndefined(params[key]) ? '' : params[key])}`).join('&');
    }
    if (search) {
        href = `${url}?${search}`;
    } else {
        href = `${url}`;
    }
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = href;
    tempLink.target = target;
    document.body.appendChild(tempLink);
    tempLink.click()
    document.body.removeChild(tempLink);
}

// 获取整数部分
export function getInteger(num){
    const arr = `${num}`.split('.')
    return arr[0]
}

// 获取小数部分
export function getDecimal(num){
    const arr = `${num}`.split('.')
    return arr[1]
}


// 是否支持position:sticky
export function isSupportSticky() {
    const vendorList = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
    const vendorListLength = vendorList.length;
    const stickyElement = document.createElement('div');
    for (let i = 0; i < vendorListLength; i++) {
        stickyElement.style.position = `${vendorList[i]}sticky`
        if (stickyElement.style.position !== '') {
            return true;
        }
    }
    return false;
}

// copy 对象 start

function copyObj(obj) {
    if(!isObject(obj)){
        return {}
    }
    let temp = {};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            let temp2 = obj[key];
            if(isObject(temp2)){
                temp[key] = copyObj(temp2)
            }else if(Array.isArray(temp2)){
                temp[key] = copyArray(temp2)
            }else{
                temp[key] = obj[key]
            }
        }
    }
    return temp
}

function copyArray(arr){
    if(!Array.isArray(arr)){
        return []
    }
    return arr.map(it => {
        if(Array.isArray(it)){
            return copyArray(it)
        }
        if(isObject(it)){
            return copyObj(it)
        }
        return it
    });
}

// copy 对象
export function copy(obj) {
    if(Array.isArray(obj)){
        return copyArray(obj)
    }
    if(isObject(obj)){
        return copyObj(obj)
    }
    return
}

// copy 对象 end

/**
 * 拼接数组中的父子元素
 * @param arr 需要格式化的数组
 * @param compareFn 判断是否为父子关系函数，compareFn(parent, child)
 * @param 在父对象下放子元素的key名称
 * @returns 返回拼接后的数组
*/
export function formatParentChildRelation(arr, compareFn, childKeyName){
    if(!Array.isArray(arr) || typeof compareFn !== 'function'){
        return
    }
    arr.forEach((item, index) => {
        arr.forEach(it => {
            if(compareFn.call(null, item, it)){
                let child = item[childKeyName];
                if(Array.isArray(child)){
                    item[childKeyName].push(it)
                }else{
                    item[childKeyName] = [it]
                }
                it._isFindParent = true;
            }
        })
    })
    let newArr = [];
    arr.forEach(item => {
        if(!item._isFindParent){
            newArr.push(item)
        }
    })
    return newArr;
}


/**
 * 替换url上的query参数
 * @param url 需要替换的url
 * @param key 需要替换的key
 * @param value 替换后的value
 * @returns 返回替换后的url
*/
export function replaceUrlQuery(url, key, value){
    if(!url || !key){
        return
    }
    const newReg = new RegExp(`${key}=([\w\%\.\-\|\(\)]{0,})`)
    return url.replace(newReg,`${key}=${value}`)
}

/**
 * 判断一个对象上是否有某个属性
 * @param obj 对象或数组
 * @param pathStr 属性的引用路径
 * @param defaultValue 找不到属性时的默认值
 * @returns 引用属性或默认值
*/
export function has(obj, pathStr, defaultValue=null){
    if(!obj || !pathStr){
        return defaultValue
    }
    try {
        const pathArr =  pathStr.split(/\.|\]|\[/);
        let value = obj;
        pathArr.forEach(it => {
            if(it){
                if(/\w+/.test(it) && !Array.isArray(value)){
                    value = value[it];
                    return
                }
                if(/\d+/.test(it) && Array.isArray(value)){
                    value = value[Number(it, 10)];
                    return
                }
            }
        })
        return value;
    } catch (e) {
        console && console.error(e);
        return defaultValue
    }
}

// 格式化时间
function formatDate(date){
    if(isDate(date)){
        return date;
    }
    if(typeof date === 'number' && !Number.isNaN(date)){
        return new Date(date);
    }
    try{
        return new Date(date);
    }catch(err){
        return null;
    }
}

// 版本号比较方法
// version1 > version2 返回1
// version1 < version2 返回-1
// version1 === version2 返回0
export function compareVersion(version1, version2) {
  const arr1 = version1.split('.')
  const arr2 = version2.split('.')
  const length1 = arr1.length
  const length2 = arr2.length
  const minlength = Math.min(length1, length2)
  let i = 0
  for (i ; i < minlength; i++) {
    let a = parseInt(arr1[i])
    let b = parseInt(arr2[i])
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    }
  }
  if (length1 > length2) {
    for(let j = i; j < length1; j++) {
      if (parseInt(arr1[j]) != 0) {
        return 1
      }
    }
    return 0
  } else if (length1 < length2) {
    for(let j = i; j < length2; j++) {
      if (parseInt(arr2[j]) != 0) {
        return -1
      }
    }
    return 0
  }
  return 0
}
