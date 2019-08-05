import React, { Fragment } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'

// hooks示例
import UseHooks_State from './components/Hooks/UseHooks-State'
import UseHooks_Reducer from './components/Hooks/UseHooks_Reducer'
import UseHooks_Effect from './components/Hooks/UseHooks-Effect'

import './style/index.styl'
// 两种声明组件的方式,class和function
// 区别就是 function 只有 props, 没有自己的状态(state), 没有生命周期, 但是效率高
// class 全都有


// 可以把UI和逻辑容器拆成两个文件

class App extends React.Component {
    constructor (prop) {
        super(prop);
        this.state = {
            num: 1,
        }
    }
    render () {
        return (
            <Fragment>
                本例子仅讲解, 请阅读源码与目录结构
                <hr/>
                <h2>Hooks</h2>
                <hr/>
                <UseHooks_State />
                <UseHooks_Reducer />
                <UseHooks_Effect />
            </Fragment>
        )
        
    }
}



export default App