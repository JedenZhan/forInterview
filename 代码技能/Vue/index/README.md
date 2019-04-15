## Vue
1. computed和watch区别
Computed: 可以关联多个实时计算的对象，当这些对象中的其中一个改变时都会触发这个属性。具有缓存能力，所以只有当数据再次改变时才会重新渲染，否则就会直接拿取缓存中的数据。
Watch：当你需要在数据变化响应时，执行异步操作，或高性能消耗的操作，自定义 watcher 的方式就会很有帮助。


##　关于MVVM的理解
1. 数据代理

2. 双向数据绑定

3. 模板解析

## 不用vue-cli搭建vue项目




## vue-router
### 路由基本使用
1. cnpm i vue-router

2. 在 `src` 里面创建 route 文件夹, 并创建index.js文件

3. ```js
   import VueRouter from 'vue-router'
   // 导入需要路由导航的组件
   
   const routes = [
       {
           path: '路径',
           component: '组件名称',
           
       }
   ]
   const route = new VueRouter(routes);
   export default route
   ```

4. 在src里面的index.js添加以下内容

   ```js
   import VueRouter from 'vue-router'
   import route from './route/index.js'
   
   Vue.use(VueRouter)
   
   new Vue({
       // ...
       route
   })
   ```

### 路由嵌套

```js
const routes = [
    {
        path: '路径',
        component: '组件名称',
        childrens: [
            {
                path: '',s
                component: ''
            }
        ]
    }
]
```

### 路由传参

```js
const routes = [
    {
        path: '路径/:id',
        component: '组件名称',
    }
]
```

然后在组件内, 可以利用 `$route.params.id` 访问到id的值

### 路由守卫

#### 全局守卫



#### 独享守卫



#### 组件内守卫






## vuex

Vuex 并不限制你的代码结构。但是，它规定了一些需要遵守的规则：

- 应用层级的状态应该集中到单个 store 对象中。

- 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。

- 异步逻辑都应该封装到 action 里面。
