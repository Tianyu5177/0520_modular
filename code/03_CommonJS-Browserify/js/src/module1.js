/*
* 使用module.exports 语法暴露一个对象
* 在CommonJs中，一个文件中，不允许同时使用两种暴露的语法，如果同时使用，以module.exports暴露的为准。
* */

module.exports =  {
  data:'0520,hello,atguigu',

  foo(){
    console.log(`我来自于module1，我是foo方法${this.data}`)
  },

  bar(){
    console.log(`我来自于module1，我是bar方法${this.data}`)
  }

}





