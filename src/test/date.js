import {date} from "../../index";
// init
date();

// Demo
const day = new Date().dayDiff(new Date('2021-01-01'));
const today = new Date().format('yyyy-MM-dd hh:mm:ss www')
console.log(day, today)

