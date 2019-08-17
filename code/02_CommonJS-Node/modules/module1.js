/*
* 使用module.exports 语法暴露一个对象
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

