import React, { Component } from 'react';

export default class Name extends Component {
  render() {

    const { value, onChange } = this.props;

    return (
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nome"
        maxLength="40"
        value={ value.toUpperCase() }
        onChange={ onChange }
        required
      />
    )
  }
}