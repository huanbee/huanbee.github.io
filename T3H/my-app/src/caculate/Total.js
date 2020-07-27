import React, { Component } from 'react';

class Total extends Component {
    render() {
        return (
            <input value={this.props.total} type="number" disabled={true}/>
        );
    }
}

export default Total;