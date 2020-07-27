import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        console.log("Child: constructor")
        this.state = {
            counter: props.counter
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Child: get derived state from props");
        return props;
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log("Child: Should component update?")
        if (this.props.counter === nextProps.counter) {
            return false
        }
        return true
    }

    componentDidMount () {
        console.log("Child: component did mount")
        this.neverDie = setInterval(() => {
            console.log("I'm never die!")
        }, 1000)
        console.log("This.neverDie", this.neverDie)
    }

    componentDidUpdate() {
        console.log("Child: Component updated!");
    }

    componentWillUnmount() {
        console.log("Component will unmount")
        clearInterval(1)
    }

    render() {
        console.log("Child: rendering..")
        return (
            <div>
                Child: state counter {this.state.counter} <br/>
                        props counter {this.props.counter}
            </div>
        );
    }
}

export default Child;
