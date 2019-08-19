/*
* 定义一个有依赖的模块，依赖于dataService，要使用dataService中的getData
* */

define(['dataService'],function (dataService) {
  let msg = '0520，就业顺利'

  function showDataAndMsg() {
    console.log(`${dataService.getData()},${msg}`)
  }

  //暴露模块
  return {showDataAndMsg}

})