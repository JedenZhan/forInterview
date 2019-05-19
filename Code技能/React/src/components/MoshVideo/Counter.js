import React, { Component } from 'react';
import { Button } from 'antd'

class Counter extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: this.props.value
    }
  }
  style = {
    margin: '10px'
  }
  render() {
    return (
      <React.Fragment>
        {this.props.children} {/*插槽? 是你吗*/}
        {this.formatCount()}<Button type='primary' style={this.style} onClick={this.handleAdd}>ADD??</Button> <br />
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