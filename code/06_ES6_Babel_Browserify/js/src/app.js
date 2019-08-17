//引入module1---【module1是分别暴露】
import {data,test,demo} from './module1'

//引入module2----【module2是统一暴露】
import {arr,foo1,foo2} from './module2'

//引入module3-----【module3是默认暴露】
import module3 from './module3'

//引入第三方模块---jquery,一般来说第三方库，都采用默认暴露
import $ from 'jquery'

console.log(data)
test()
demo()
console.log(arr)
foo1()
foo2()
module3()
$('body').css('background','skyblue')
console.log(1)

