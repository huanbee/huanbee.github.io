import React, { Component } from "react";
import { createStore } from "redux";

const counterReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            let value = state.counter.value;
            if (state.counter.status) {
                value++
            }
            return {
                counter: {
                    ...state.counter,
                    value,
                },
            };
        case "DECREASE":
            return {
                counter: {
                    ...state.counter,
                    value: state.counter.value - 1,
                },
            };
        case "CHANGE_STATUS_COUNTER":
            return {
                counter: {
                    ...state.counter,
                    status: !state.counter.status,
                },
            };
    }
    return state;
};

const initialStateCounter = {
    counter: {
        value: 0,
        status: false,
    },
};
const store = createStore(counterReducer, initialStateCounter);

store.subscribe(() => {
    console.log(store.getState());
});

export default class Counter extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     counter: 0,
        // };
        this.state = {
            counter: store.getState().counter,
        };
    }

    componentDidMount() {
        // store.subscribe(() => {
        //     this.setState({ counter: store.getState().counter });
        // });
    }

    increase = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        setTimeout(() => {
            store.dispatch({ type: "INCREASE" });
        }, 500)
        this.setState({ counter: store.getState().counter });
    };

    decrease = () => {
        store.dispatch({ type: "DECREASE" });
        this.setState({ counter: store.getState().counter });
    };

    changeStatusCounter = () => {
        // setTimeout(() => {
        store.dispatch({ type: "CHANGE_STATUS_COUNTER" });
        // }, 500)
        this.setState({ counter: store.getState().counter });
    };

    render() {
        console.log("Counter: ", this.state);
        return (
            <div>
                {/* Counter: {this.state.counter} */}
                <br />
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.changeStatusCounter}>
                    Change Status ({ this.state.counter.status ? "ON" : "OFF" })
                </button>
                <Container />
            </div>
        );
    }
}

class Container extends Component {
    render() {
        return (
            <div>
                <h3>Container: </h3>
                <ChildCounter />
            </div>
        );
    }
}

class ChildCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ counter: store.getState().counter.value });
        });
    }

    render() {
        return <div>Child Counter: {this.state.counter}</div>;
    }
}
