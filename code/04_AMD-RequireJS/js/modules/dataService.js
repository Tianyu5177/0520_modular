/*
* 定义一个没有依赖的模块
* */

define(function () {

  let msg = 'hello!atguigu'

  function getMsg() {
    return msg.toUpperCase()
  }

  return {getMsg}

})