import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log("start", props.start)
        console.log("end", props.end)
    }
    render() {
        return (
            <div style={this.props.numberOfGuessing >= 7 ? {backgroundColor: 'red'}:{}} className="jumbotron text-center">
                <h1>Getting random number - {this.props.numberOfGuessing} </h1>
                <p>
                    Tôi đã random một số trong khoảng 1 - 100, đố bạn đoán được?
                </p>
            </div>
        );
    }
}

export default Header;
