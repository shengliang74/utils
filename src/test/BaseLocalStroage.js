import { BaseLocalStorage } from '../../index';

// Demo
let bs = new BaseLocalStorage("sl__");
bs.set("isShowed", true)
const res = bs.get('isShowed');
console.log(res)