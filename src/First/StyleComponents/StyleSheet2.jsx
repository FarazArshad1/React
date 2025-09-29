import React, { Component } from 'react'
import Style from './StyleSheet2.module.css'

export default class StyleSheet2 extends Component {
  render() {
    return (
      <div>
        <h1 className={Style.heading1}>This is from StyleSheet 2</h1>
      </div>
    )
  }
}
