import { util } from "../../../index";
const { has } = util || {};

// demo1
let demo1 = {a:{b:{c:{d:111}}}};
let res1 = has(demo1, "[a][b][c][d]");
let res1_1 = has(demo1, ".a.b.c.d");
let res1_2 = has(demo1, ".a.b.c.d.e.f");
let res1_3 = has(demo1, ".a.b[c][d]");
let res1_4 = has(demo1, "[a][b].c.d");
console.log(res1)
console.log(res1_1)
console.log(res1_2)
console.log(res1_3,res1_4)

// demo2
let demo2 = {a1:{b2:[{c3:[[1],[2]]}]}};
let res2 = has(demo2, "[a1][b2][0][c3][1][0]");
let res2_1 = has(demo2, "[a1].b2[0].c3[1][0]");
let res2_2 = has(demo2, ".a1.b2[0].c3[1][0]");
console.log(res2, res2_1, res2_2)

// demo3
let demo3 = {a1:{111:[{c3:[[1],[3]]}]}};
let res3 = has(demo3, "[a1][111][0][c3][1][0]");
let res3_1 = has(demo3, ".a1.111[0][c3][1][0]");
console.log(res3, res3_1)

// demo4 TODO兼容引号
let demo4 = {a1:{111:[{c3:[[1],[3]]}]}};
let res4 = has(demo4, "['a1']['111'][0][c3][1][0]");
let res4_1 = has(demo4, ".'a1'.'111'[0][c3][1][0]");
console.log(res4, res4_1)

// demo5
let demo5 = [{111:[{c3:[[1],[5]]}]}];
let res5 = has(demo5, "[0][111][0][c3][1][0]");
let res5_1 = has(demo5, "[0].111[0][c3][1][0]");
console.log(res5, res5_1)