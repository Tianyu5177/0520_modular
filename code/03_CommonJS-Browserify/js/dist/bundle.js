(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//引入自定义模块
let module1 = require('./module1')
let module2 = require('./module2')
let module3 = require('./module3')

//引入第三方模块
let uniq = require('uniq')

//怎么使用一个模块，取决于模块暴露的是什么
console.log(module1.data);
module1.foo()
module1.bar()

module2()

console.log(module3.demo);
console.log(module3.demo2);

let arr = [1,3,2,5,6,4,4,6,5,3,2,1,11,10]
console.log(uniq(arr));

},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
/*
* 使用module.exports 语法暴露一个对象
* 在CommonJs中，一个文件中，不允许同时使用两种暴露的语法，如果同时使用，以module.exports暴露的为准。
* */

module.exports =  {
  data:'0520,hello,atguigu',

  foo(){
    console.log(`我来自于module1，我是foo方法${this.data}`)
  },

  bar(){
    console.log(`我来自于module1，我是bar方法${this.data}`)
  }

}






},{}],3:[function(require,module,exports){
/*
* 使用module.exports 语法暴露一个函数
* */
module.exports = function () {
  console.log('我来自于module2')
}

},{}],4:[function(require,module,exports){
exports.demo = [2,4,6,8,10]
exports.demo2 = {n:1,n:2}

},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
