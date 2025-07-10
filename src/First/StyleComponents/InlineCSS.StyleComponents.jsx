import React, { Component } from "react";

export default class InlineCSSStyleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  changeState = () => {
    this.setState({
      active: true,
    });
  };

  render() {
    let obj = this.state.active
      ? { color: "blue", backgroundColor: "grey", fontSize: "50px" }
      : { color: "blue", backgroundColor: "orange", fontSize: "50px" };

    return (
      <div>
        <button style={obj} onClick={this.changeState}>Click Here</button>
        {/* <h1 style={{ ...obj, ...obj1 }}>Learning Never Ends</h1> */}
      </div>
    );
  }
}
