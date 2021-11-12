import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment.bind(this)}>Increment</button>
        <button onClick={this.decrement.bind(this)}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
