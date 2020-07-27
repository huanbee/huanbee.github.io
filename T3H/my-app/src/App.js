import React from "react";
import Header from './components/Header'
import MainGame from './components/MainGame'

class RandomGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 0,
            numberOfGuessing: 0,
        }
    }

    componentDidMount() {
        this.setState({
            randomNumber: this.random(),
        });
    }

    random = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    numberOfGuessingChange = (numberOfGuessing) => {
        // alert(numberOfGuessing)
        this.setState({
            numberOfGuessing
        })
    }

    render() {
        return (
            <div>
                <Header numberOfGuessing={this.state.numberOfGuessing} start={2} end={100} randomNumber={this.state.randomNumber} />
                <MainGame numberOfGuessingChange={this.numberOfGuessingChange} randomNumber={this.state.randomNumber} />
            </div>
        );
    }
}

// export function App() {
//   return ( <h1>App</h1> )
// }

// export function App2() {
//   return ( <h1>App2</h1> )
// }

export default RandomGame;
