import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from './route/index.js'

// 要用Router把路由包裹起来
ReactDOM.render(<Router><Routes /></Router>, document.getElementById('App'))