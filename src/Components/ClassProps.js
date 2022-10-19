import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    let height = this.props.userHeight;
    return (
      <div>
        <h1>{height}</h1>
      </div>
    );
  }
}
