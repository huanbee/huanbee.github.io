import React, { Component } from 'react';
import InputValue from './InputValue';
import Total from './Total';

class Caculate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstValue: 0,
            secondValue: 0,
            total: 0
        }
    }
    firstValueChange = (value) => {
        console.log("Value: ", value)
        this.setState({ firstValue: value, total: this.state.secondValue + value })
    }
    secondValueChange = (value) => {
        this.setState({ secondValue: value, total: this.state.firstValue + value })
    }
    render() {
        return (
            <div>
               <InputValue valueChange={this.firstValueChange}/> + 
               <InputValue valueChange={this.secondValueChange}/> = 
               <Total total={this.state.total}/>
            </div>
        );
    }
}

export default Caculate;