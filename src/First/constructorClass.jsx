import React from "react";

export default class ConstructorClass extends React.Component {
  constructor() {
    super();
    console.log("Constructor From Constructor Class");
  }
  render() {
    return (
      <div>
        <h1>Hello World {this.props.name}</h1>
      </div>
    );
  }
}
