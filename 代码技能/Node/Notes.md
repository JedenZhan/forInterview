# 第一个 Node 应用

```js
const http = require('http'); // node使用CommonJS模块化的方式
http.createServer(function (request, response) { // 回调函数

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'})
    // 发送响应数据 "Hello World"
    response.end('Hello World\n')
}).listen(8888)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/')
```



# Node 的回调函数

因为JS是单线程的, 所以当有I/O操作时,如果一直等,会消耗大量时间.

所以,Node使用回调函数解决, 可以处理大量的并发请求

`并发: 轮转时间片执行方式,这边执行一次,那边执行一次`

```js
// 同步事例
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");
// 这个程序里面,因为是同步执行,所以按顺序输出


// 异步
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!"); // 异步执行,先结束
```



# Node 事件环

- 虽然Node是单进程单线程的应用程序, 但V8支持回调函数,所以Node可执行大量并发,性能特别高

- Node 几乎所有的Api支持回调函数

- 都Node的事件机制都是基于设计模式的观察者模式实现
- Node 单线程类似进入了一个死循环,直到没有事件观察者然后退出,每一个异步事件都会生成一个观察者,如果事件完成就调用回调函数

## 事件驱动程序

Node 使用 事件驱动程序, 当 web server 收到了请求,就把它关闭执行, 然后服务下一个请求, 当前面请求处理完成,它被放回处理队列，当到达队列开头，这个结果被返回给用户。

这个模型称为非阻塞I/O模型



![img](/home/jedenzhan/Documents/Interview/代码技能/Node/images/event_loop.jpg)













