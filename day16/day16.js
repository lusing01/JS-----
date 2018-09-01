var log = function() {
    console.log.apply(console, arguments)
}
let // let 就是限制作用域在 {} 内
for (let i = 0; i < array.length; i++) { // i只在该函数范围内有效
    log(i)
}

// const 用来声明一个不可复制的变量
const a = 1 // congst 声明变量时必须要赋值

const arr = [1, 2]
arr.push(3) // arr 所对应的名称的数据内部的值是可以改变的
arr = 1 // 却不能对 arr 进行赋值

// Set 集合，类似数组，但无重复元素
var s = new Set()
s.add(1)
s.has(1)
s.delete(1)

// Map 和 Object 很相似
let o = {} // Object
o.name = 'gua'
o.name
var m = new Map()
m.set('name', 'gua')

// ... 扩展符号，把数组解开成单独的元素
// 可变参数由 ... 实现
var a1 = [1, 2, 3]
var a2 = [...a1, 4]

[a, b] = [b, a]
// 函数默认参数
var foo = function(a, name='gua') {
    log(a, name)
}
// 解包
// 箭头函数的 this 是绑定的
// 箭头函数没有 arguments 对象
var a1 = [1, 2, 3]
// 以下两种形式是等价的
var a2 = a1.map(function(n)) {
    return n * n
}
var a3 = a1.map(n => n * n)

// ESX 总会新增一些函数，例如 includes 等
