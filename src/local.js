import * as utils from './common/utils'
import * as dateFn from './common/dateFn'
import BaseLocalStorage from './common/BaseLocalStorage'

let Bl = new BaseLocalStorage('test-', undefined, window.sessionStorage);
Bl.set('aaa',1111)
let ba = Bl.get('aaa')
console.log(ba)

