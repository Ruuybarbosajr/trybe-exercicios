import React, { Component } from 'react';

export default class Type extends Component {
  render() {

    const { onChange } = this.props

    return (
      <fieldset>

        <legend>Tipo</legend>

        <label htmlFor="house">
          <input
            type="radio"
            name="type"
            id="house"
            onChange={ onChange }
            value="Casa"
          />Casa
        </label>

        <label htmlFor="apartament">

          <input
            type="radio"
            name="type"
            id="apartament"
            onChange={ onChange }
            value="Apartamento"
          />Apartamento
        </label>

      </fieldset>

    )
  }
}