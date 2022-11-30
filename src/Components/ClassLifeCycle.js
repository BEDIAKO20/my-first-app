import React, { Component } from "react";

class ClassLifeCycle extends Component {
  componentDidMount() {
    console.log("hello1");
  }
  componentWillUnmount() {
    console.log("hello 2");
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default ClassLifeCycle;
