import React from 'react'
import { Button } from 'antd'
import './style/index.styl'


class App extends React.Component {
    constructor () {
        super();
        this.state = {
            num: 1
        }
    }
    render () {
        return (
            <div>
                <button>hello world</button>
                {this.state.num}
                {/* <img src='../assets/1.png' /> */}
                <Button>antd nice</Button>

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