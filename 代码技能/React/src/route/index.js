import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import App from '../App.js'
import Foo from '../components/Foo.js'
import Bar from '../components/Bar.js'

class Routes extends React.Component {

    render () {
        return (
            <HashRouter>
                <Route path="/" component={App} /> {/**React-router没有类似vue的router-view匹配组件显示地方, 只是按照这个嵌套结构来显示 */}
                <Route path="/foo" component={Foo} />
                <Route path="/bar" component={Bar} />
            </HashRouter>
            
        )
    }
}

export default Routes