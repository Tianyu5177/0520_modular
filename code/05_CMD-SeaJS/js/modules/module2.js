/*
* 定义一个没有依赖的模块
* */

define(function (require,exports,module) {
  let data = 'hello,0520'

  function foo2() {
    console.log(`${data}---------module2`)
  }

  module.exports = foo2
})