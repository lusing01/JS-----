// Web Worker 为 web 内容在后台线程中运行脚本提供了一种简单的方法。
// 线程可以执行任务而不干扰用户界面。后台独立其他脚本运行的 JavaScript。
// 注意：worker 内不能直接操作 DOM 节点，也不能使用 window 对象的默认方法和属性。
// workers 和主线程间数据传递： postMessage() 发送消息 -> onmessage 事件处理函数响应，此过程数据非共享而是复制。
// 一个专用的 worker 仅仅能被生成它的脚本使用
// 使用前需要先对 worker 特性进行检测
if (window.Worker) {
    var myWorker = new Worker('worker.js');  //创建一个新的 worker
    first.onchange = function() {            // 向 worker 发送消息
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    }
    second.onchange = function() {
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    }
    myWorker.onmessage = function(e) {        // 获取事件的 data，并将其设置为 textContent
        result.textContent = e.data;
        console.log('Message received from worker');
    }
}
// 终止 worker
myWorker.terminate();
