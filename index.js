import {BaseLocalStorage} from './src/index';

var a = new BaseLocalStorage();
console.log(a)

// if (module.hot) {
    // module.hot.accept();
    // module.hot.dispose(function() {
    //   $("#app").children('.app').remove();
      // component(); // 重新渲染页面后，component 更新 click 事件处理
    // });
    // module.hot.accept('./print.js', function() {
    //   document.body.removeChild(element);
    //   element = component(); // 重新渲染页面后，component 更新 click 事件处理
    //   document.body.appendChild(element);
    // })
//   }