/*
* “混合”暴露
* */

//默认暴露
export default {
  name:'kobe',
  age:18
}

//分别暴露
export function demo001() {
  console.log(`我是来自于module4----demo001-----我是分别暴露的`)
}
//分别暴露
export function demo002() {
  console.log(`我是来自于module4----demo002------我是分别暴露的`)
}

let arr01 = [1,3,5,7,9]
let student = {name:'tom',school:'尚大'}
//统一暴露
export {arr01,student}
