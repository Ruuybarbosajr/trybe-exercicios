import React, { Component } from 'react';

export default class City extends Component {

  render() {

    const { value, onChange, onBlur } = this.props

    return (
      <input
        type="text"
        name="city"
        id="city"
        value={ value }
        onChange={ onChange }
        // onBlur={ onBlur }
        onBlur={ () => onBlur(!isNaN(value[0])) }
        placeholder="Cidade"
        required
      />
    )
  }
}