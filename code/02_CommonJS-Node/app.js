//引入自定义模块
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

//引入第三方模块
let uniq = require('uniq')

//怎么使用一个模块，取决于模块暴露的是什么
console.log(module1.data);
module1.foo()
module1.bar()

module2()

console.log(module3.demo);
console.log(module3.demo2);

let arr = [1,3,2,5,6,4,4,6,5,3,2,1,11,10]
console.log(uniq(arr));



