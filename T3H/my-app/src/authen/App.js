import React, { Component } from 'react';
import Home from './pages/Home'
import Login from './pages/Login'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("token")
        }
    }
    render() {
        console.log("token", this.state.token)
        return (
            <div>
                { this.state.token ? ( <Home/> ) : (<Login/>) }
            </div>
        );
    }
}

export default App;
