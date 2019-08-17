'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module4');

var _module6 = _interopRequireDefault(_module5);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*console.log(data)
test()
demo()
console.log(arr)
foo1()
foo2()
module3()
$('body').css('background','skyblue')
console.log('@@@@@@@@@@@@@@@')
console.log(module4)
demo001()
demo002()
console.log(arr01)
console.log(student)*/

//import * as module3 from './module3' //如果是默认暴露，此种引入的方法用的不多

//引入module4-----混合方式暴露的

//import * as module1 from './module1'

//引入module2----【module2是统一暴露】
//import {arr,foo1,foo2} from './module2'
//import * as module2 from './module2'
console.log(_module2.haha1);

//引入第三方模块---jquery,一般来说第三方库，都采用默认暴露


//引入module3-----【module3是默认暴露】
//引入module1---【module1是分别暴露】

(0, _module2.haha2)();
(0, _module2.haha3)();