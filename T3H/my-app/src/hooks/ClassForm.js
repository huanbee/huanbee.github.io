import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  inputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

componentDidMount(){
    document.title = this.state.name
}
componentDidUpdate(){
    document.title = this.state.name
}

  render() {
    return (
      <div>
      
        <label>Name: {this.state.name}</label> <br/>
        <input
          type="text"
          name="name"
          id=""
          className="input-rounded"
          value={this.state.name}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}

export default ClassForm;
