// 是否http或https链接
export function isHttpOrHttpsLink(link) {
    let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)/;
    return reg.test(link);
}

// 是否手机号
export function isMobilePhone(number){
    return /^1\d{10}$/.test(number)
}

// 是否身份证号
export function isIdNumber(id){
    const idNumber = /(^[1-9]\d{5}(18|19|20)\d{2}(((0[1-9])|10|11|12)([0-2][1-9]|10|20|30|31))\d{3}[0-9Xx]$)|(^[0-9Xx]{15}$)/;
    return idNumber.test(id)
}