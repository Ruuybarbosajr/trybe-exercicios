import React, { Component } from 'react';
import states from '../estados'

export default class States extends Component {
  render() {

    const { onChange } = this.props

    return (
      <select
        name="states"
        id="states"
        onChange={ onChange }
        required
      >
        { states.map((state) =>
          <option
            key={ state }
            value={ state }
          >
            { state }
          </option>) }
      </select>
    )
  }
}