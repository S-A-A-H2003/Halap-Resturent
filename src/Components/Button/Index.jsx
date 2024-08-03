import './Style.css';
import React, { Component } from 'react'
export default class Button extends Component {
  render() {
    return (
      <div>
        <button className="button1"><a href={this.props.href}>{this.props.name1}</a></button>
      </div>
    )
  }
}

