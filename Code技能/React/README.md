# 自己动手搭建 react 项目

## 先安装基础包

- cnpm i webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/presets-env @babel/plugin-transform-react-jsx html-webpack-plugin -D
- cnpm react react-dom redux react-router -S

创建`.babelrc`

内容:

{
    "presets": ["babel-presets-env"],
    "plugins": ["@babel/plugin-transform-react-jsx"]
}

创建`.gitignore`

内容:

/node_modules

## 踩过的坑:

1. events.js:183  throw er; // Unhandled 'error' event

未知错误...我都是linux系统,因为监控文件数量过多超过系统设定.修改 /ect/sysctl.conf  `fs.inotify.max_user_watches=524288`  重启搞定

2. 



# React 讲解

## 虚拟DOM & DIFF 算法

>  虚拟DOM是react首先提出的概念, 因为原生DOM过于庞大,操作代价高,所以facebook提出使用**JS对象**来描述DOM
>
> 用于实现**高效DOM更新**(按需渲染页面)
>
> **怎么按需:** 获取 DOM 树, 新旧两棵 DOM 树, 对比, 只修改不同
>
> 浏览器并没有提供 DOM tree API, React 使用**JS 对象**模拟 新旧 DOM 树
>
> 这个JS对象就叫虚拟DOM



**那什么是 diff 算法呢: (differ)**

虽然使用了虚拟DOM, 但还是不够高效, 所以React使用了diff算法

> 三个概念:
>
> tree diff : 新旧DOM tree 逐层对比的过程, 整个DOM树对比完成后,找到需要更新的元素
>
> component diff : React 组件级别的对比
>
> > 若组件类型不变, 则认为组件**暂时**不需要更新, 并进行 element diff 对比
> >
> > 若改变,则移除旧组件, 创建并插入新组件
>
> element diff : 元素级别的对比

![img](/home/jedenzhan/Documents/Interview/代码技能/React/assets/diff-.png)







## React 生命周期

![img](/home/jedenzhan/Documents/Interview/代码技能/React/assets/lifeCircle.webp)



React生命周期分为三个步骤: **创建挂载, 运行更新, 销毁**

每一个步骤对应will和did钩子函数

- 挂载 ---- 一辈子只执行一次
  - componentWillMount()
  - render()
  - componentDidMount()
- 更新 ---- 按需执行多次
  - componentWillReceiveProps()
  - shouldComponentUpdate()
  - componentWillUpdate()
  - render()
  - componentDidUpdate()
- 销毁 ---- 只执行一次
  - componentWillUnmount()



## Redux

具体使用见`/src/redux/store.js`jedenzhan

### 基本概念: 

在redux中, 所有的数据保存在一个叫`store`的容器中, **并且一个程序只能有一个store, 不能有多个**, store本质上是一个状态树, 保存了所有数据的状态, 任何组件可以直接从store获取数据. 如果想要改变状态, 需分发一个  `action`, 分发的意思是把可执行信息发送给store, 当一个store接收到action, 它将把这个action代理给相关的`reducer`, reducer是一个纯函数, 它可以查看之前的状态, 并执行action, 然后返回新的状态

**Redux只允许数据单向流动**

![img](/home/jedenzhan/Documents/Interview/代码技能/React/assets/reduxData.png)





## 学习一个框架

- 它是什么？能做什么？
- 它存在的理由是什么？解决了什么样的问题、满足了什么样的需求？
- 它的适用场景是什么？优缺点是什么？
- 它怎么用？最佳实践是什么？
- 它的原理是什么？(常问)



## React 部分原理

### setState() 做了什么

1. 首先, setState是一个异步操作, setState的调用并不会立即引起state的改变
2. 如果在一个函数里面多次调用state, 结果并不是你预期那样, setState可能会导致DOM重绘, 如果每一次调用都直接执行的话, 会造成性能损失, 多次调用setState会合并
3. 

## React-router

1. 和vue-router不一样, vue-router是配置路由, react-router更像管理组件, 把需要路由的组件导入到一个文件, 内部有路由的显示逻辑, 所以不需要类似router-view标签

## Redux



### redux-thunk



### react-redux







































