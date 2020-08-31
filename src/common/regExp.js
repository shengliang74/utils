// 是否http或https链接
export function isHttpOrHttpsLink(link) {
    let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)/;
    return reg.test(link);
}