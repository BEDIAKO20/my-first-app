import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { Name: "Kofi", Age: 23 },
        { Name: "Ben", Age: 20 },
        { Name: "Kofi", Age: 23 },
        { Name: "Ben", Age: 20 },
      ],

      fullName: "",
      age: 0,
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      //targetting one input at a time
      //  name: e.target.value,

      //targetting multiple inputs at a time to change state
      [e.target.name]: e.target.value,
    });
    console.log(this.state.fullName);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      Name: this.state.fullName,
      Age: this.state.age,
    };

    this.setState({
      persons: [...this.state.persons, newPerson],

      fullName: "",
      age: 0,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type={"text"}
            value={this.state.fullName}
            onChange={this.handleChange}
            name="fullName"
          ></input>
          <br />
          <label>Age</label>
          <br />
          <input
            type={"number"}
            value={this.state.age}
            name="age"
            onChange={this.handleChange}
          ></input>
          <br></br>

          <input type="submit" />
        </form>

        {this.state.persons.map((item, index) => (
          <div key={index}>
            <h3>Name: {item.Name}</h3>
            <p>Age: {item.Age}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default ClassForm;
