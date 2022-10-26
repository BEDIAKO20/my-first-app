import React, { Component } from "react";

class ClassState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1,
    };

    this.increaseHandler = this.increaseHandler.bind(this);
  }
  increaseHandler(e) {
    e.preventDefault();
    this.setState({
      number: this.state.number + 1,
    });
  }

  decreaseHandler = (e) => {
    e.preventDefault();
    this.setState({
      number: this.state.number - 1,
    });
  };
  render() {
    console.log("state changed");

    return (
      <div>
        <br />
        <h1>{this.state.number}</h1>
        <br />
        <button onClick={this.increaseHandler}>increase</button>
        <button onClick={this.decreaseHandler}>decrease</button>
      </div>
    );
  }
}

export default ClassState;
