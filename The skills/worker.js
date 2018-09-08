onmessage = function(e) {          // worker 中接受到消息后，事件处理函数作响应
    console.log('Message received from main script');
    var workerResult = 'Result' + (e.data[0] * e.data[1]);
    console.log('Message received from main script');
    postMessage(workerResult); // 将结果传回主线程
}        // onmessage 处理函数允许在任何时刻，一旦接收到消息就可以执行一些代码。
         // 代码中消息本身作为事件的 data 属性进行使用。
close(); //workers 可调用close方法进行关闭
