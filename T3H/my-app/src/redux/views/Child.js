import React, { Component } from 'react';
import { connect } from 'react-redux';

class Child extends Component {
    render() {
        return (
            <div>
                Child: { this.props.counter.value }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

export default connect(
    mapStateToProps
)(Child);