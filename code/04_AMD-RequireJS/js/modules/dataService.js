/*
* 定义一个没有依赖的模块,该模块暴露一个提供数据的方法
* */
define(function () {
  //数据
  let data = 'hello,0520!'

  //提供数据的方法
  function getData() {
    return data
  }

  //暴露
  return {getData}

})