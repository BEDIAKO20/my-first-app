import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    console.log(this.props);
    let name = this.props.header;
    let image = this.props.imageUrl;
    return (
      <div>
        <h1>My name is {name}</h1>
        <img src={image[1]} />
      </div>
    );
  }
}

export default ClassProps;
