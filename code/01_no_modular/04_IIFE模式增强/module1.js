/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

((w,$)=>{
    let data = 'atguigu'

    function foo() {
      console.log(data)
    }

    function bar() {
      console.log(data)
    }


    w.module1Obj = {foo,bar}

    $('body').css('background','skyblue')
})(window,jQuery)