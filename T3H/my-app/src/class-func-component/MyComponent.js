import React, { Component } from "react";

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                counter: 0,
                status: "abc"
            },
        };
    }

    increase = () => {
        // let { data } = this.state;
        // data.counter = data.counter + 1
        this.setState({
            // data: {
            //     counter: this.state.data.counter + 1
            // }
            data: { ...this.state.data, counter: this.state.data.counter + 1 }
        })
    }
    changeNothing = () => {
        this.setState({
            data: {
                counter: this.state.data.counter
            }
            // data: this.state.data
        })
    }

    render() {
        return (
            <div>
                <Counter data={this.state.data} />
                <CounterFunc data={this.state.data} />
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.changeNothing}>Change nothing</button>
            </div>
        );
    }
}

class Counter extends React.PureComponent {
    // shouldComponentUpdate() { # shouldn't do it
    //     return true;
    // }
    render() {
        console.log("Class counter rendering...")
        const { data } = this.props;
        return <div>Counter: {data.counter}</div>;
    }
}

const CounterFunc = React.memo(({ data }) => {
    console.log("Function counter rendering...")
    return <div>Counter: {data.counter}</div>;
});
