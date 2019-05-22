import React, { Component } from 'react';
import Counter from "./Counter.js";
import {Button} from 'antd';
class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 3
      },
      {
        id: 3,
        value: 2
      },
      {
        id: 4,
        value: 1
      }
    ]
  }
  handleDelete = (id) => {
    console.log(`delete ${id}`)
    let counters = this.state.counters.filter(item => item.id !== id);
    this.setState({
      counters: counters
    })
  }
  handleIncrement = (counter) => {
    console.log(counter)
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;
    this.setState({
      counters
    })
  }
  handleReset = () => {
    const counters = this.state.counters,
      length = counters.length;
    for (let i = 0; i < length; i ++) {
      counters[i].value = 0
    }
    this.setState({
      counters
    })
  }
  // getAll = () => {
  //   const counters = this.state.counters,
  //     length = counters.length;
  //   let all = 0
  //   for (let i = 0; i < length; i ++) {
  //     all += counters[i].value
  //   }
  //   this.setState({
  //     all
  //   })
  // }
  componentWillMount () {
    // this.getAll()
  }
  render() {
    return (
      <React.Fragment>
        <h1>Total {this.state.counters.reduce((a, b) => {return a + b.value}, 0)}</h1>
        {/* reduce用法,  */}
        <Button onClick={this.handleReset}>Reset</Button> <br />
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          >
            {/* <h1>Title</h1> */}
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;