import React, { Component } from 'react';

class InputValue extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    valueChange = (event) => {
        let newValue = Number(event.target.value)
        this.setState({
            value: newValue
        })
        this.props.valueChange(newValue)
    }

    render() {
        return (
            <input onChange={this.valueChange} value={this.state.value} type="number"/>
        );
    }
}

export default InputValue;