import React, { Component } from "react";
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/CounterAction'
import Child from './Child'

class Counter extends Component {

    increase = () => {
        this.props.increase()
    };

    decrease = () => {
        this.props.decrease()
    };

    changeStatusCounter = () => {
    };

    render() {
        console.log("Counter: ", this.props);
        return (
            <div>
                <br />
                Counter: { this.props.counter.value }
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.changeStatusCounter}>
                    Change Status ({ this.props.counter && this.props.counter.status ? "ON" : "OFF" })
                </button>
                <Child />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps () {
    return {
        increase,
        decrease
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)