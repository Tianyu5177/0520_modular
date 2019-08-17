'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo = demo;
exports.test = test;
/*
* 分别暴露
* */

var data = exports.data = 'hello,atguigu';

function demo() {
  console.log('\u6211\u662F\u6765\u81EA\u4E8Emodule1\u7684--------\u6211\u662Fdemo' + data);
}

function test() {
  console.log('\u6211\u662F\u6765\u81EA\u4E8Emodule1\u7684--------\u6211\u662Ftest' + data);
}