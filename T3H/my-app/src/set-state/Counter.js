import React, { Component } from "react";
import './counter.css';
import './counter.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    // this.setState({
    //     counter: this.state.counter + 1,
    // });

    //chuyen callback fun
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };
  increase2Time = () => {
    this.increase();
    this.increase();
  };

  render() {
    return (
      <div>
       <p className="bg-light"> Counter: {this.state.counter}</p> <br />
        <button className="bg-green" onClick={this.increase}>Increase</button>
        <button onClick={this.increase2Time}>increase2Time</button>
      </div>
    );
  }
}

export default Counter;
