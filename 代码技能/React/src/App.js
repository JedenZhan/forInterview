import React from 'react'
import { Button } from 'antd'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style/index.styl'

// 两种声明组件的方式, class 和 function 
// 区别就是 function 只有 props, 没有自己的状态(state), 没有生命周期, 但是效率高
// class 全都有


class App extends React.Component {
    constructor (prop) {
        super(prop);
        this.state = {
            num: 1
        }
    }
    render () {
        return (
            <div>
                本例子仅讲解, 请阅读源码与目录结构
                <ul>
                    <li>
                        <Link to='/foo'>ToFoo</Link> {/* Link表示到达哪个路由, 和vue-router的Router-Link类似 */}
                    </li>
                    <li>
                        <Link to='/bar'>ToBar</Link>
                    </li>
                </ul>
                <Button>antd nice</Button>
                <Button> count + 1 </Button>
                <Button> count - 1 </Button>
            </div>
        )
    }


    // 生命周期
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
        this.setState({
            num: this.state.num + 1,
        })
        this.setState({
            num: this.state.num + 1,
        })
        this.setState({
            num: this.state.num + 1,
        })
    }
    componentWillUpdate() {
        console.log('will update')
    }
    componentDidUpdate() {
        console.log('did update')
    }
    componentWillUnmount() {
        console.log('will unmount')
    }
    
}

export default App