// 给数字字符串补零，不支持负数
export function padNumber(num, fill = 2) {
    const len = (`${num}`).length;
    return (Array(
        fill > len ? ((fill - len) + 1 || 0) : 0
    ).join(0) + num);
}