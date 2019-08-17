/*
* 定义一个有依赖的模块
* */

define(['dataService'],function (dataService) {
  let name = 'tom'

  function speak() {
    console.log(`${name}说${dataService.getMsg()}`)
  }

  return {speak}

})