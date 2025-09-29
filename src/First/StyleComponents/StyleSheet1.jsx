import React, { Component } from 'react'
import Style from './StyleSheet1.module.css'

export default class StyleSheet1 extends Component {
  render() {
    return (
      <div>
        <h1 className={Style.heading1}>My name is Faraz</h1>
      </div>
    )
  }
}
