// 引用响应的 Pure 和 Bootstrap 库——>CSS 库
// Bootstrap 官方网站：http://getbootstrap.com/ http://www.bootcss.com/(中文网)
// Pure 官方网站： https://purecss.io/

var o = {
    foo: 1,
    bar: function() {
        return this.foo
    }
}

o.bar() // 其值为1，此时已经由 this 动态变为静态

var a = o.bar
a() // 值为 undefined

var b = o.bar.bind(o) // b 是一个函数，b 这个函数的 this 被 bind 绑定到了 o 上
// 调用 b 时就不是 window.b 而是 o.b 了
// bind 作用就是将 this 绑定到参数上面，生成一个函数
var log = function() {
    console.log.apply(console, arguments)
    // 调用 log 函数，this 是 console
    // arguments 是一个数组，但是作为参数传递给 log 函数
    log(1, 2, 3)
    arguments = [1, 2, 3]
    // console.log([1, 2, 3])
    // console.log(1, 2, 3)
    // apply 将 this 绑定在第一个参数中
    // apply 将数组中的每一个元素作为独立元素传给函数
    console.log.call(console, 1, 2, 3, 4)
    // 除了数组元素的写法不同，其他与 apply 相同
}
