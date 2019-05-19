import React, { Component } from 'react';
import Counter from "./Counter.js";

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
  render() { 
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}><h1>Title</h1></Counter>
        ))}
      </React.Fragment>
    );
  }
}
 
export default Counters;