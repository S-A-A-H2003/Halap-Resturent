import './Style.css';
import React, { Component } from 'react'
export default class Food extends Component {
  render() {
    return (
      <div className="food">
        <img src={this.props.url} alt=""></img>
        <h3>{this.props.name}</h3>
        <h4>{this.props.price}</h4>
      </div>
    )
  }
}
