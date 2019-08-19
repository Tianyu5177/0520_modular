/*
* 定义一个有依赖的模块,该模块依赖于module2和module3
* */

define(function (require,exports,module) {
  let data = 'hello,0520'

  //同步引入module2
  let module2 = require('./module2')
  module2()

  //异步引入module3
 require.async('./module3',function (module3) {
   module3.foo3()
 })

  function foo4() {
    console.log(`${data}---------module4`)
  }

  module.exports = foo4
})