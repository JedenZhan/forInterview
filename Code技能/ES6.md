具体请精读阮一峰老师的ES6入门

## ES6 新特性

1. 变量声明let, const
2. 字符串扩展
   1. 模板字符串
3. 数组扩展
   1. Array.isArray()
   2. Array.from
   3. Array.of
   4. Array.prototype.find
4. 数字扩展
   1. Number.isFinite()
   2. Number.isNaN()
   3. 将parseInt和parseFloat已到Number上面, 减少全局函数
   4. Number.isTnteger()判断是否为整数
   5. 扩展运算符
5. 函数扩展
   1. 默认值
   2. ...rest
   3. 箭头函数
   4. 尾调用优化
6. 对象扩展
   1. 属性简洁表示
   2. super关键字
   3. 对象扩展运算符
7. 箭头函数
   1. 没有this
   2. 不能new
   3. 可以call, apply, bind, 但this不会改变
8. Class语法糖
   1. 
9. Promise解决异步调用
   1. Promise
      1. .all
      2. .race
      3. .resolve
      4. .reject
      5. .allSettled
   2. Promise.prototype
      1. .then
      2. .catch
      3. .finally
10. 解构赋值
    1. 左右结构相同即可
11. Symbol
    1. 唯一标识符, 主要用于解决对象键名重复问题
12. Set和Map新数据类型
    1. set
       1. 成员唯一无重复
       2. add()添加新成员
       3. set内部使用===判断是否相等, 并且NaN === NaN
    2. 
    3. map
       1. 
13. 模块化
14. async 异步
15. Proxy 代理
16. Generator

## 数组扩展
### 展开运算符
### Array.from()
将伪数组转化为真正的数组
### Array.of()
主要为了弥补Array构造函数的不足
### 数组实例的find()
find()用于查找数组元素, 接受一个回调函数
```js
let arr = [1, 2, 3, 4]

arr.find((n) => n < 3) // 1
```
遍历函数, 直到找到符合回调函数条件的成员停止, 否则返回undefined

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



数据抽象

过程抽象





##　装饰器

```js
function reverse(fn) {
    return (...args) => {
        return fn.apply(this, args.reverse())
    }
}
```
