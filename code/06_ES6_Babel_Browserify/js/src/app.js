//引入module1---【module1是分别暴露】
import {data,test,demo} from './module1'
//import * as module1 from './module1'

//引入module2----【module2是统一暴露】
import {arr,foo1,foo2} from './module2'
//import * as module2 from './module2'
//import {haha1,haha2,haha3} from './module2' //如果module2暴露的时候，指定了别名，就要用别名

//引入module3-----【module3是默认暴露】
import module3 from './module3'
//import * as module3 from './module3' //如果是默认暴露，此种引入的方法用的不多

//引入module4-----混合方式暴露的
import module4,{demo001,demo002,arr01,student} from './module4'

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
console.log('@@@@@@@@@@@@@@@')
console.log(module4)
demo001()
demo002()
console.log(arr01)
console.log(student)



