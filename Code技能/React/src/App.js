import React, { Fragment } from 'react';
import { Button } from 'antd';

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
        this.plusCount = this.plusCount.bind(this)
    }
    render () {
        return (
            <Fragment>
                本例子仅讲解, 请阅读源码与目录结构
                <Button>Init</Button>
            </Fragment>
        )
    }
    // conut + 1
    plusCount () {
        alert(1);
    }

    // 生命周期
    componentWillMount() {
        console.log('will mount');
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