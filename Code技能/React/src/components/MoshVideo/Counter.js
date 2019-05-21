import React, { Component } from 'react';
import { Button } from 'antd'

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: this.props.counter.value
    }
  }
  style = {
    margin: '10px'
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children} {/*插槽? 是你吗*/}
        {this.formatCount()}
        <Button type='primary' style={this.style} onClick={this.handleAdd}>ADD??</Button>
        <Button type='danger' style={this.style} onClick={() => this.props.onDelete(this.props.counter.id)}>Detete</Button> {/**emit? 是你吗, 如果不外面嵌套一个函数, 会直接执行函数 */}
        <br />
      </React.Fragment>
    );
    
  }
  formatCount () {
    const { value } = this.state
    return value === 0 ? 'Zero' : value
  }
  getProps =  () => {
    console.log(this.props)
  }
  handleAdd = () => {
    this.getProps()
    this.setState({
      value: this.state.value + 1
    })
  }
}
 
export default Counter;