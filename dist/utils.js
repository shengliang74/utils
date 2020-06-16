module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){Date.prototype.clearTime=function(){return this.setHours(0),this.setMinutes(0),this.setSeconds(0),this.setMilliseconds(0),this},Date.prototype.addDays=function(t){return this.setDate(this.getDate()+1*t),this},Date.prototype.addMonths=function(t){return this.setMonth(this.getMonth()+1*t),this},Date.prototype.firstDayOfMonth=function(){return this.setDate(1),this},Date.today=function(){return(new Date).clearTime()},Date.prototype.diff=function(t){let e=t.getTime()-this.getTime();return Math.floor(e/864e5)},Date.prototype.clone=function(){let t=this.getTime();return new Date(t)},Date.prototype.format=function(t){let e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(w+)/.test(t)&&(t=t.replace(RegExp.$1,[["日","一","二","三","四","五","六"],["周日","周一","周二","周三","周四","周五","周六"],["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]][RegExp.$1.length-1][this.getDay()])),e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},Date.prototype.dayDiff=function(t){try{t.getYear()}catch(t){return 0}var e=Math.abs(this-t)/864e5;return parseInt(e,10)},Date.prototype.compareDate=function(t,e){return(t=new Date(t.replace(/\-/g,"/")))-(e=new Date(e.replace(/\-/g,"/")))},Date.prototype.DateDiff=function(t,e,n){function r(t){var e=new Date(t);this.year=e.getFullYear(),this.month=e.getMonth()+1,this.day=e.getDate(),this.hour=e.getHours(),this.minute=e.getMinutes(),this.second=e.getSeconds(),this.msecond=e.getMilliseconds(),this.week=e.getDay()}var i,o=new r(e),a=new r(n);switch(String(t).toLowerCase()){case"y":case"year":i=o.year-a.year;break;case"n":case"month":i=12*(o.year-a.year)+(o.month-a.month);break;case"d":case"day":i=Math.round((Date.UTC(o.year,o.month-1,o.day)-Date.UTC(a.year,a.month-1,a.day))/864e5);break;case"h":case"hour":i=Math.round((Date.UTC(o.year,o.month-1,o.day,o.hour)-Date.UTC(a.year,a.month-1,a.day,a.hour))/36e5);break;case"m":case"minute":i=Math.round((Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute)-Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute))/6e4);break;case"s":case"second":i=Math.round((Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second)-Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second))/1e3);break;case"ms":case"msecond":i=Date.UTC(o.year,o.month-1,o.day,o.hour,o.minute,o.second,o.msecond)-Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute,a.second,o.msecond);break;default:i="invalid"}return i},Date.prototype.getSimpleTime=function(t,e){t=new Date(t.replace("T"," ").replace(/-/g,"/"));let n=parseInt(t.getHours(),10),r=parseInt(t.getMinutes(),10),i=null;return e?(n<10&&(n="0"+n),r<10&&(r="0"+r),i=n+":"+r):i=n+":"+r,i},Date.prototype.isLeap=function(){return year%100==0?year%400==0:year%4==0},Date.prototype.getHMS=function(t,e){let n=0,r=0,i=0,o=0;return Number.isNaN(t)||"number"!=typeof t?t:(t=Math.abs(t),n=Math.floor(t/86400),r=Math.floor((t-24*n*60*60)/3600),i=Math.floor((t-24*n*60*60-60*r*60)/60),o=Math.floor(t-24*n*60*60-60*r*60-60*i),e||(n=0,r+=24*n),r=r<10?"0"+r:r,i=i<10?"0"+i:i,o=o<10?"0"+o:o,{day:n,hour:r,min:i,sec:o})}},function(t,e,n){"use strict";n.r(e),n.d(e,"util",(function(){return r})),n.d(e,"time",(function(){return P})),n.d(e,"money",(function(){return i})),n.d(e,"number",(function(){return o})),n.d(e,"BaseLocalStorage",(function(){return R}));var r={};n.r(r),n.d(r,"isArray",(function(){return a})),n.d(r,"isObject",(function(){return u})),n.d(r,"isEmptyObject",(function(){return s})),n.d(r,"isFunction",(function(){return c})),n.d(r,"isIphonex",(function(){return l})),n.d(r,"isExtraIphone",(function(){return h})),n.d(r,"isIphone",(function(){return d})),n.d(r,"getOSplatform",(function(){return f})),n.d(r,"getQueryString",(function(){return g})),n.d(r,"getUrlParams",(function(){return p})),n.d(r,"parseUrl",(function(){return m})),n.d(r,"appendPlainParams",(function(){return y})),n.d(r,"getCookie",(function(){return b})),n.d(r,"getCookieFn",(function(){return v})),n.d(r,"addStyle",(function(){return D})),n.d(r,"firstLetterCapitalize",(function(){return w})),n.d(r,"stringTrim",(function(){return S})),n.d(r,"lockPage",(function(){return M})),n.d(r,"unLockPage",(function(){return O})),n.d(r,"isHaveChinese",(function(){return x})),n.d(r,"isChinese",(function(){return U}));var i={};n.r(i),n.d(i,"formatDecimal",(function(){return C})),n.d(i,"toMoney",(function(){return T})),n.d(i,"formatWAN",(function(){return j}));var o={};function a(t){return Array.isArray(t)}function u(){return"[object Object]"===Object.prototype.toString.call(obj)}function s(t){try{return"{}"===JSON.stringify(data)}catch(t){return!1}}function c(t){return"[object Function]"===Object.prototype.toString.call(t)}function l(){const t=navigator.userAgent;return/\s+(m\/9\.1|m\/10\.3|m\/10\.6|m\/11\.2|m\/11\.6)+\s*(\(simulator\))?/gi.test(t)||/iphonex/i.test(t)}function h(){const t=/iphone/gi.test(UA)&&window.devicePixelRatio&&3===window.devicePixelRatio&&375===window.screen.width&&812===window.screen.height,e=/iphone/gi.test(UA)&&window.devicePixelRatio&&3===window.devicePixelRatio&&414===window.screen.width&&896===window.screen.height,n=/iphone/gi.test(UA)&&window.devicePixelRatio&&2===window.devicePixelRatio&&414===window.screen.width&&896===window.screen.height;return t||e||n}function d(){return/iphone/gi.test(UA)}function f(){const t=navigator.userAgent;return{ios:!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:t.indexOf("Android")>-1||t.indexOf("Adr")>-1}}function g(t,e){const n=new RegExp(`(^|\\?|\\&)${t}=([^&#?]*)([#&?]|$)`,"i"),r=(e?e.substring(e.indexOf("?")+1):location.search.substr(1)).match(n);return null!=r?decodeURIComponent(r[2]):null}function p(t=location.href){const e=/([^&=?]+)=([^&#?]+)/g,n={};let r,i,o;for(;r=e.exec(t);)o=r[1],i=r[2],i=i?decodeURIComponent(i):"",n[o]=i;return n}function m(t){if(!t)return{};const e=t.indexOf("#"),n=t.indexOf("?");return-1===e&&-1===n?{path:t}:-1===n||-1!==e&&e<n?{path:t.substring(0,e),hash:t.substring(e+1)}:-1===e?{path:t.substring(0,n),search:t.substring(n+1)}:{path:t.substring(0,n),search:t.substring(n+1,e),hash:t.substring(e+1)}}function y(t,e,n){const r=m(t),i=p(r.search||""),o={};n?Object.assign(o,i,e):Object.assign(o,e,i);const a=Object.keys(o).map(t=>`${t}=${encodeURIComponent(o[t])}`).join("&");return`${r.path}?${a}${r.hash?"#"+r.hash:""}`}function b(t,e){e||(e=document.cookie);let n="";if(e){const r=e.split("; ");for(let e,i,o=0;o<r.length;o++)e=r[o],i=e.indexOf("="),e.substr(0,i)===t&&(n=e.substr(i+1))}return n}function v(t){var e=document.cookie||"";t+="=";for(var n=0;n<e.length;){var r=n+t.length;if(e.substring(n,r)==t){var i=e.indexOf(";",r);return-1==i&&(i=e.length),unescape(e.substring(r,i))}if(0==(n=e.indexOf(" ",n)+1))break}return null}function D(t={}){const e={backgroundImage:"url({#backgroundImage})"};return Object.keys(t).map(n=>{t[n]?e[n]&&(t[n]=e[n].replace(/\{#([^}]+)\}/,t[n])):delete t[n]}),t}function w(t){return t?t.replace(t[0],t[0].toUpperCase()):""}function S(t){return null==t?"":t.replace(/(^\s*)|(\s*$)/g,"").replace(/(^　*)|(　*$)/g,"")}function M(){document.body.addEventListener("touchmove",t=>t.preventDefault(),{passive:!1})}function O(){document.body.removeEventListener("touchmove",t=>t.preventDefault())}function x(t){return!!/[\u4e00-\u9fa5]/.test(t)}function U(t){return!!/^[\u4e00-\u9fa5]+$/.test(t)}n.r(o),n.d(o,"padNumber",(function(){return E}));var P=n(0);function C(t,e){let n=+t;if(Number.isNaN(n)||"number"!=typeof n)return t;t+="";let r=n<0;r&&(t=t.substr(1));let i=t.split(".");if(i[0]=o(o(i[0]).replace(/(\d{3})/g,"$1,")).replace(/^,/,""),e>=0){let t=(i[1]||"")+new Array(e+1).join("0");i[1]=t.substr(0,e)}return""===i[1]&&(i.length=1),(r?"-":"")+i.join(".");function o(t){return t.split("").reverse().join("")}}function T(t){const e=+t<0,n=(""+Math.abs(+t)).split("."),r=(""+n[0]).split("").reverse(),i=[];for(let t=0;t<r.length-1;t++)i.push(r[t]),(t+1)%3==0&&i.push(",");i.push(r[r.length-1]);let o=i.reverse().join("");return o=n[1]?`${o}.${n[1]}`:o,e?"-"+o:o}function j(t){let e={result:"",intPart:"",decimalPart:"",decimalPartAndDot:"",decimalPartAndUnit:""};if(Number.isNaN(t)||"number"!=typeof t||t<0)return e;let n=(t/1e4).toString();return e.intPart=n.split(".")[0],n.indexOf(".")>-1?(e.decimalPart=n.split(".")[1],e.decimalPartAndDot="."+e.decimalPart,e.resultNoWang=e.intPart+"."+e.decimalPart,e.result=e.intPart+"."+e.decimalPart+"万"):(e.resultNoWang=e.intPart,e.result=e.intPart+"."+e.decimalPart+"万"),e}function E(t,e=2){const n=(""+t).length;return Array(e>n&&e-n+1||0).join(0)+t}var I=function(t,e){this.preId=t,this.timeSign=e||"|-|"};I.prototype={status:{SUCCESS:0,FAILURE:1,OVERFLOW:2,TIMEOUT:3},storage:localStorage||window.localStorage,getKey:function(t){return this.preId+t},set:function(t,e,n,r){var i=this.status.SUCCESS;t=this.getKey(t);try{r=new Date(r).getTime()||r.getTime()}catch(t){r=(new Date).getTime()+26784e5}try{this.storage.setItem(t,r+this.timeSign+e)}catch(t){i=this.status.OVERFLOW}n&&n.call(this,i,t,e)},get:function(t,e){var n,r,i,o=this.status.SUCCESS,a=(t=this.getKey(t),null),u=this.timeSign.length;try{a=this.storage.getItem(t)}catch(t){return i={status:this.status.FAILURE,value:null},e&&e.call(this,i.status,i.value),i}return a?(n=a.indexOf(this.timeSign),r=+a.slice(0,n),new Date(r).getTime()>(new Date).getTime()||0==r?a=a.slice(n+u):(a=null,o=this.status.TIMEOUT,this.remove(t))):o=this.status.FAILURE,i={status:o,value:a},e&&e.call(this,i.status,i.value),i},remove:function(t,e){var n=this.status.FAILURE,r=(t=this.getKey(t),null);try{r=this.storage.getItem(t)}catch(t){}if(r)try{this.storage.removeItem(t),n=this.status.SUCCESS}catch(t){}e&&e.call(this,n,n>0?null:r.slice(r.indexOf(this.timeSign)+this.timeSign.length))}};var R=I}]);