import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        super(props);
        console.log("constructoring...")
        this.state = {
            counter: 0,
            counter2: 0,
            showCounter1: true,
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("get derived state from props");
        return null;
    }

    changeNothing = () => {
        this.setState({
            counter: this.state.counter
        })
    }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log("This: ", this.state, this.props)
    //     console.log("Next: ", nextState, nextProps)
    //     console.log("Should component update?")
    //     if (this.state.counter === nextState.counter) {
    //         return false
    //     }
    //     return true
    // }
    increaseCounter = (whichCounter) => {
        if (whichCounter === 1) {
            console.log("increaseCounter")
            this.setState({
                counter: this.state.counter + 1
            })
        } else {
            console.log("increaseCounter")
            this.setState({
                counter2: this.state.counter2 + 1
            })
        }
    }

    removeCounter1 = () => {
        this.setState({ showCounter1: false })
    }

    render() {
        console.log("rendering....")
        return (
            <div>
                {
                    this.state.showCounter1
                    && <Child counter={this.state.counter}/>
                }
                
                {/* <Child counter={this.state.counter2}/> */}
                <button onClick={() => { this.increaseCounter(1) }}>Increase Counter1</button>
                <button onClick={() => { this.increaseCounter(2) }}>Increase Counter2</button>
                <button onClick={this.changeNothing}>Change nothing</button>
                <button onClick={this.removeCounter1}>Remove Counter 1</button>
                Parent: counter {this.state.counter}
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("Component updated!");
    }
}

export default Parent;
