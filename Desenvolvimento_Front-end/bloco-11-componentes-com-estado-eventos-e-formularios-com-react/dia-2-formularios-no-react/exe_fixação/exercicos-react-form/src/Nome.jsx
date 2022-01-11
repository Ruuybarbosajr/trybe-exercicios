import React, { Component } from 'react';

export default class Nome extends Component {
  render() {

    const { value, onChange, onError } = this.props

    return (
      <label htmlFor="">
        Nome
        <input
          name='nome'
          type="text"
          value={ value }
          onChange={ onChange }
          onError={ onError }
        />
      </label>
    )
  }
}