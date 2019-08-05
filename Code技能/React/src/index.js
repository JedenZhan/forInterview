import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux' // 暴露的关键API: provider(用于向所有组件注入store), connect(用于连接store)

import App from './App'
import store from './redux/store'

// 要用Router把路由包裹起来



ReactDOM.render(
    // <Provider store={store}>
        <App />
    // </Provider>
, document.getElementById('App'))