/*
* 定义一个有依赖的模块
* */

define(function (require,exports,module) {
  let msg = 'module4'

  function showMsg() {
    console.log(msg.toUpperCase())
  }

  //同步引入module2
  let module2 = require('./module2')
  module2()

  //异步引入module3
  require.async('./module3',function (m3) {
    m3()
  })

  module.exports = showMsg

})