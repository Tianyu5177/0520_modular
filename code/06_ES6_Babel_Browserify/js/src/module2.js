/*
* 统一暴露
* */

let arr = [2,4,6,8,10]

function foo1() {
  console.log(`我是来自于module2------foo1------${arr}`)
}

function foo2() {
  console.log(`我是来自于module2------foo2------${arr}`)
}

//简写方式
//export {arr,foo1,foo2}

//完整方式
export {
  arr as haha1,
  foo1 as haha2,
  foo2 as haha3
}

