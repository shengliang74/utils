import BaseLocalStorage from '../lib/BaseLocalStorage'

let Bl = new BaseLocalStorage('test-', undefined, window.sessionStorage);
Bl.set('aaa',111221)
let ba = Bl.get('aaa')
console.log(ba)

