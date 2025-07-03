import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  ParentMethod = () => {
    alert("Hello From Parent");
  };

  render() {
    return <div>
        <ChildComponent callMethod={this.ParentMethod}/>
    </div>;
  }
}
