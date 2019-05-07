// 关于Node事件环请阅读笔记

const events = require('events'), // 引入实例
    eventEmitter = new events.EventEmitter(); // 创建唯一实例

// eventEmitter.on('evenName', eventHandler); // 注册事件
// eventEmitter.emit('eventName'); // 触发事件



'使用示例'
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

// 触发 connection 事件 
eventEmitter.emit('connection');

console.log("程序执行完毕");