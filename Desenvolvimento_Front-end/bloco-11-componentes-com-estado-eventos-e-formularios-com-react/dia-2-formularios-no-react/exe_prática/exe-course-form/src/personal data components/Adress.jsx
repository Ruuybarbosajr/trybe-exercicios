import React, { Component } from 'react';

export default class Adress extends Component {
  render() {

    const { value, onChange } = this.props

    return (
      <input
        type="text"
        name="adress"
        id="adress"
        value={ value.replace(/[^ a-zA-Z0-9]/g, '') }
        onChange={ onChange }
        placeholder="Endereço"
        maxLength="200"
        required
      />
    )
  }
}