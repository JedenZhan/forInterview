// 核心文件, 创建唯一一个store
import { createStore, applyMiddleware } from 'redux' // 导入创建store, 应用中间件
import thunk from 'redux-thunk' // 导入异步工具
import {composeWithDevTools} from 'redux-devtools-extension' // 使用redux扩展

import reducers from './reducers.js'




const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk))); // 
// 可以手动订阅更新, 也可以事件绑定到视图层
// store.subscribe(() =>
//   console.log(store.getState())
// );

// 改变内部 state 惟一方法是 dispatch 一个 action
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// // 1


export default store