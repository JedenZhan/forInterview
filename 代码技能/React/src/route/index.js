import React from 'react'
import { Route } from 'react-router'

import App from '../App.js'
import Foo from '../components/Foo.js'
import Bar from '../components/Bar.js'

class Routes extends React.Component {

    render () {
        return (
            <div>
                <Route path="/" component={App} /> {/*匹配的组件在这里展示*/}
                <Route path="/foo" component={Foo} />
                <Route path="/bar" component={Bar} />
            </div>
        )
    }
}

export default Routes