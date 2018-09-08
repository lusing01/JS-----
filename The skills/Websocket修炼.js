/* HTML5 WebSocket
    WebSocket 是 HTML5 开始提供的一种在单个 'TCP' 连接上进行双全工通讯的协议。
    在 WebSocket API 中，浏览器和服务器只需一次握手。
*/
var Socket = new WebSocket(url, [ptotocol]) // protocol 可选参数，指定可接受的子协议。
/* WebSocket 对象的属性 */
Socket.readyState              // 只读属性表示连接状态 0-未建立 1-已建立，可通信 2-正在进行关闭 3.连接关闭或连接不能打开
Socket.bufferedAmount         // 已被 send() 放入正在队列中等待但没有发出的 UTF-8 文本字节数
/* WebSocket 事件 */
open - Socket.onopen         //连接建立时触发
message - Sokcet.onmessage  //客户端接受服务端数据时触发
error - Socket.onerror     //通信发生错误时触发
close - Socket.onclose    //连接关闭时触发
/* WebSocket 方法 */
Socket.send()            // 使用连接发送数据
Socket.close()          // 关闭连接
