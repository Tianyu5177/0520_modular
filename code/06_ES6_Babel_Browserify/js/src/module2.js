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

export {arr,foo1,foo2}