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










