/*
* 定义一个没有依赖的模块
* */

define(function (require,exports,module) {
  let msg = 'module1'

  function showMsg() {
    console.log(msg.toUpperCase())
  }

  module.exports = showMsg

})