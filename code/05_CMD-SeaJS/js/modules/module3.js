/*
* 定义一个没有依赖的模块
* */

define(function (require,exports,module) {
  let data = 'hello,0520'

  function foo3() {
    console.log(`${data}---------module3`)
  }

  exports.foo3 = foo3
})