/**
 * 格式化金额xxx,xxx.00
 * @param val
 * @param precision 小数位，默认保留原数据的小数位，
 */
export function formatDecimal(val, precision) {
    let num = +val;
    if (Number.isNaN(num) || typeof num !== 'number') {
        return val;
    }
    val = val + '';
    let isNegative = num < 0;
    if (isNegative) { // 剔除负号
        val = val.substr(1);
    }
    let numParts = val.split('.');
    // int part
    numParts[0] = reverse(reverse(numParts[0]).replace(/(\d{3})/g, '$1,')).replace(/^,/, '');
    if (precision >= 0) {
        let preStr = (numParts[1] || '') + (new Array(precision + 1)).join('0');
        numParts[1] = preStr.substr(0, precision);
    }
    if (numParts[1] === '') {
        numParts.length = 1;
    }
    return (isNegative ? '-' : '') + numParts.join('.');
    function reverse(num) {
        return num.split('').reverse().join('');
    }
}

// 转换为千分位分割
export function toMoney(str) {
    const isNegative = +str < 0 // 是否是负数

    const parts = `${Math.abs(+str)}`.split('.')
    const arr = `${parts[0]}`.split('').reverse()
    const result = []
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i])
        if ((i + 1) % 3 === 0) result.push(',')
    }

    result.push(arr[arr.length - 1])

    let resultStr = result.reverse().join('')
    resultStr = parts[1] ? `${resultStr}.${parts[1]}` : resultStr
    return isNegative ? `-${resultStr}` : resultStr
}

/**
 * 格式化金额以万为单位,返回一个对象
 * @param num
 */
export function formatWAN(num) {
    let resultJson = {
        result: "", // 格式化结果
        intPart: "", // 整数部分
        decimalPart: "", // 小数部分
        decimalPartAndDot: "", // 带点的小数部分
        decimalPartAndUnit: "" // 小数部分和单位
    }
    if (Number.isNaN(num) || typeof num !== 'number' || num < 0) {
        return resultJson;
    }
    let numForStr = (num / 10000).toString();
    resultJson.intPart = numForStr.split('.')[0]
    if (numForStr.indexOf('.') > -1) {
        resultJson.decimalPart = numForStr.split('.')[1];
        resultJson.decimalPartAndDot = "." + resultJson.decimalPart;
        resultJson.resultNoWang = resultJson.intPart + "." + resultJson.decimalPart;
        resultJson.result = resultJson.intPart + "." + resultJson.decimalPart + "万";
    } else {
        resultJson.resultNoWang = resultJson.intPart;
        resultJson.result = resultJson.intPart + "." + resultJson.decimalPart + "万";
    }
    //   resultJson.decimalPartAndUnit = "." + resultJson.decimalPart + "万";
    return resultJson;
}