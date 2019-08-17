'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo001 = demo001;
exports.demo002 = demo002;
/*
* “混合”暴露
* */

//默认暴露
exports.default = {
  name: 'kobe',
  age: 18

  //分别暴露
};
function demo001() {
  console.log('\u6211\u662F\u6765\u81EA\u4E8Emodule4----demo001-----\u6211\u662F\u5206\u522B\u66B4\u9732\u7684');
}
//分别暴露
function demo002() {
  console.log('\u6211\u662F\u6765\u81EA\u4E8Emodule4----demo002------\u6211\u662F\u5206\u522B\u66B4\u9732\u7684');
}

var arr01 = [1, 3, 5, 7, 9];
var student = { name: 'tom', school: '尚大'
  //统一暴露
};exports.arr01 = arr01;
exports.student = student;