import React from 'react'
import './style/index.styl'

class App extends React.Component {

    render () {
        return (
            <div>
                <button>hello world</button>
                <img src='../assets/1.png' />
            </div>
        )
    }


    // 生命周期
    componentWillMount() {
        console.log('will mount')
    }
    componentDidMount() {
        console.log('did mount')
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