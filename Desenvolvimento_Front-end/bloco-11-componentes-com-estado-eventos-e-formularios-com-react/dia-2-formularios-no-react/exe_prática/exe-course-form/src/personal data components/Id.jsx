import React, { Component } from 'react';

export default class Id extends Component {
  render() {

    const { value, onChange } = this.props
    return (

      <input
        type="text"
        name="id"
        id="id"
        value={ value }
        maxLength="11"
        placeholder="CPF"
        onChange={ onChange }
        required
      />
    )
  }
}