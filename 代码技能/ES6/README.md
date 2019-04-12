## ES6 新特性

1. 变量声明let, const
2. 箭头函数
3. Class语法糖
4. Promise解决异步调用
5. 解构赋值
6. Symbol
7. Set和Map新数据类型
8. 模块化
9. async 异步
10. Proxy 代理
11. Generator

## Set

### base

Set 是一个构造函数, 类似数组, 但不会有重复值

```js
let set1 = new Set([1, 2, 3, 3, 4])
```

set 方法

- add() 添加元素, 返回新set
- clear() 清空元素, 不返回值
- delete() 删除元素, 返回是否删除成功
- has() 判断是否在set里面, 返回布尔

set 属性

- size 返回set大小

```js
let arr = Array.from(new Set([1, 2, 3])) // Array.from可以把set转化为数组
```

### 遍历操作

- keys() 返回键名的遍历器 
- values() 返回键值的遍历器 --`这俩只返回可遍历对象`
- entries() 返回键值对的遍历器
- forEach() 使用回调函数遍历每一个成员

### WeakSet

和set两个不同

- **WeakSet内容只能是对象**
- **WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用**

```js
let ObjSet = new WeakSet([{}])
```



## Map

传统对象的替代品

传统对象只能用字符串当做键名, Map数据类型可以使用对象当键名

**Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适**

















