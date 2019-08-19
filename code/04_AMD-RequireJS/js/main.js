/*
* AMD模块化规范的固定引入方式，要写配置文件
* */

requirejs.config({
  //模块标识名与模块路径映射(注册模块)
  paths: {
    "loger": "./modules/loger",
    "dataService": "./modules/dataService",
    "jquery":"./libs/jquery-1.10.1"
  }
})

requirejs(['loger','jquery'],function (loger,$) {
  loger.showDataAndMsg()
  $('body').css('background','skyblue')
  console.log($)
});
