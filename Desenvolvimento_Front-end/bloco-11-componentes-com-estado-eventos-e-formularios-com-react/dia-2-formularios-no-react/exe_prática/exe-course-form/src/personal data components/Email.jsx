import React, { Component } from 'react';

export default class Email extends Component {
  render() {

    const { value, onChange } = this.props

    return (
      <input
        type="email"
        name="email"
        id="email"
        maxLength="50"
        placeholder="Email"
        value={ value }
        onChange={ onChange }
        required
      />
    )
  }
}