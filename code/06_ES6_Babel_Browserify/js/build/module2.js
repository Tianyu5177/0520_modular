"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* 统一暴露
* */

var arr = [2, 4, 6, 8, 10];

function foo1() {
  console.log("\u6211\u662F\u6765\u81EA\u4E8Emodule2------foo1------" + arr);
}

function foo2() {
  console.log("\u6211\u662F\u6765\u81EA\u4E8Emodule2------foo2------" + arr);
}

//简写方式
//export {arr,foo1,foo2}

//完整方式
exports.haha1 = arr;
exports.haha2 = foo1;
exports.haha3 = foo2;