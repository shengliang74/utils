import { util } from "../../../index";
const { formatParentChildRelation } = util || {};

// demo1
// 存在多余的元素
let demo1 = [
    { id: 1, pid: 0 },
    { id: 0, pid: null },
    { id: 3, pid: 2 },
    { id: 2, pid: 1 },
    { id: 5, pid: 4 }
];
let res1 = formatParentChildRelation(demo1, function (a, b) { return a.id === b.pid }, 'child')
console.log(JSON.stringify(res1))
// [{ "id": 0, "pid": null, "child": [{ "id": 1, "pid": 0, "child": [{ "id": 2, "pid": 1, "_isFindParent": true, "child": [{ "id": 3, "pid": 2, "_isFindParent": true }] }], "_isFindParent": true }] }, { "id": 5, "pid": 4 }]

// demo2
// 多个子元素
let demo2 = [
    { id: 1, pid: 0 },
    { id: 4, pid: 0 },
    { id: 0, pid: null },
    { id: 3, pid: 2 },
    { id: 2, pid: 1 },
    { id: 5, pid: 4 }
];
let res2 = formatParentChildRelation(demo2, function (a, b) { return a.id === b.pid }, 'child')
console.log(JSON.stringify(res2))
// [{"id":0,"pid":null,"child":[{"id":1,"pid":0,"child":[{"id":2,"pid":1,"_isFindParent":true,"child":[{"id":3,"pid":2,"_isFindParent":true}]}],"_isFindParent":true},{"id":4,"pid":0,"child":[{"id":5,"pid":4,"_isFindParent":true}],"_isFindParent":true}]}]

// demo3
// 使用不同的父子关系函数
let demo3 = [
    { id: 1, childId: [2,3,4] },
    { id: 2, childId: null },
    { id: 0, childId: 1 },
    { id: 3, childId: null },
    { id: 4, childId: 5 },
    { id: 5, childId: null }
];
const compareFn3 = function(a, b){
    if(Array.isArray(a.childId)){
        return a.childId.includes(b.id)
    }
    return a.childId === b.id;
}
let res3 = formatParentChildRelation(demo3, compareFn3, 'children')
console.log(JSON.stringify(res3))
// [{"id":0,"childId":1,"children":[{"id":1,"childId":[2,3,4],"children":[{"id":2,"childId":null,"_isFindParent":true},{"id":3,"childId":null,"_isFindParent":true},{"id":4,"childId":5,"_isFindParent":true,"children":[{"id":5,"childId":null,"_isFindParent":true}]}],"_isFindParent":true}]}]