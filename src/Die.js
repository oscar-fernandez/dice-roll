import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
  render() {
    const { face, rolling } = this.props
    return (
      <i
        className={`fas fa-dice-${face} Die ${
          this.props.rolling && 'wobbling'
        }`}
      ></i>
    )
  }
}

export default Die
