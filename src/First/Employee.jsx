import React, { Component } from "react";

export class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Learning Never Ends",
      count : 1,
    };
  }

  changeName() {
    this.setState({
      name: this.props.name,
      age : 23,
      surname : "Students",
      count : this.props.count+1
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.surname}</h1>
        <input type="button" value="Click" onClick={() => this.changeName()} />
      </div>
    );
  }
}

export default Employee;
