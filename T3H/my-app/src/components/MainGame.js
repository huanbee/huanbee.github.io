import React from "react";

class MainGame extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.user_name)
        this.state = {
            numberOfGuessing: 0,
            currentGuessing: 0,
            message: "",
        };
    }

    onGuessingChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            currentGuessing: Number(event.target.value),
        });
    };

    guessing = () => {
        var {
            currentGuessing,
            message,
            numberOfGuessing,
        } = this.state;

        if (currentGuessing > this.props.randomNumber) {
            message = "Your guessing is bigger";
            // this.setState({ message : "Your guessing is bigger"})
        } else if (currentGuessing < this.props.randomNumber) {
            message = "Your guessing is smaller";
        } else {
            message = "Chúc mừng";
            alert(message);
        }
        numberOfGuessing++;
        this.setState({ message, numberOfGuessing });
        this.props.numberOfGuessingChange(numberOfGuessing)
    };
    render() {
        var { numberOfGuessing, currentGuessing, message } = this.state;
        var { randomNumber } = this.props;
        return (
            <div className="main">
                {randomNumber}
                <button>New Game</button>
                <hr />
                <p className="text-bold">
                    Số lần bạn đã đoán là: {numberOfGuessing}
                </p>
                <p className="text-bold">Số bạn đoán là</p>
                <input
                    value={currentGuessing}
                    onChange={this.onGuessingChange}
                    type="text"
                />
                <button onClick={this.guessing}>Đoán</button>
                <p>{message}</p>
            </div>
        );
    }
}

export default MainGame;
