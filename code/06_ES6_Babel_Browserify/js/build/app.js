'use strict';

var _module = require('./module1');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./module2');

var _module4 = require('./module3');

var _module5 = _interopRequireDefault(_module4);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*console.log(data)
test()
demo()*/


//引入module3-----【module3是默认暴露】
//引入module1---【module1是分别暴露】
//import {data,test,demo} from './module1'
console.log(_module2.default);

//引入第三方模块---jquery,一般来说第三方库，都采用默认暴露


//引入module2----【module2是统一暴露】

console.log(_module3.arr);
(0, _module3.foo1)();
(0, _module3.foo2)();
(0, _module5.default)();
(0, _jquery2.default)('body').css('background', 'skyblue');
console.log(1);