import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>
          My name is {this.props.name} and i am currently doing Job at{" "}
          {this.props.company}
          {this.props.children}
        </h1>
      </div>
    );
  }
} 

MyClass.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
}