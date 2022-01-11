import React, { Component } from 'react';

export default class Email extends Component {
  render() {

    const { value, onChange } = this.props

    return (
      <label htmlFor="">
        Email
        <input
          type="email"
          name="email"
          id="email"
          value={ value }
          onChange={ onChange }
        />
      </label>
    )
  }
}