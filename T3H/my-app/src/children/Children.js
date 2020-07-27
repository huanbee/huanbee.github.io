import React, { Component } from "react";

export default class Children extends Component {
    render() {
        return (
            <div>
                <Child order={1}>
                    <p>Child order</p>
                    <p>hihi</p>
                </Child>
                <Child order={2}>
                    <h1>Child order</h1>
                </Child>
                <Child order={3}>
                    <span>Child order</span>
                </Child>
            </div>
        );
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.order}: {this.props.children}
            </div>
        );
    }
}
