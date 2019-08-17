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

exports.arr = arr;
exports.foo1 = foo1;
exports.foo2 = foo2;