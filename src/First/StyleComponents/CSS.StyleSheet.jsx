import React, { Component } from 'react'
import "./CSSStyleSheeet.css"

export default class CSSStyleSheet extends Component {
  render() {
    let x = this.props.check ? 'myfont' : 'background';
    return (
      <div>
        {/* Applying single class */}
        <div className='myFont'>My name is Hassan Khan</div>

        {/* Applying multiple classes */}
        <div className='myFont background'>I am a teacher</div>

        {/* Applying class dynamically */}
        <div className={x}>I am a student</div>
      </div>
    )
  }
}
