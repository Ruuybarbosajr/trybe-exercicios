import React, { Component } from 'react';
import Email from './Email';
import Nome from './Nome';


export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      estado: '',
      email: '',
      idade: 0,
      vai: false,
      formularioComErros: false
    }
  }

  handleError = ({ target }) => {
    console.log(target.value)
    if (target.value.length > 5) this.setState({ formularioComErros: true })
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value })
  }

  render() {

    const { nome, email } = this.state

    return (

      <form className="forms">

        <Nome
          value={ nome }
          onChange={ this.handleChange }
          onError={ this.handleError }
        />

        <label htmlFor="">
          Estado
          <select
            name="estado"
            id=""
            onChange={ this.handleChange }
          >
            <option value="Minas Gerais">Minas Gerais </option>
            <option value="Minas Gerais">Rio de Janeiro</option>
            <option value="Minas Gerais">São Paulo</option>
            <option value="Minas Gerais">Espirito Santo</option>
          </select>
        </label>

        <Email
          value={ email }
          onChange={ this.handleChange }
        />

        <label htmlFor="">
          Comentário
          <textarea
            name="idade"
            id=""
            cols="30"
            rows="10"
            onChange={ this.handleChange }
          ></textarea>
        </label>

        <label htmlFor="">
          <input
            type="checkbox"
            name="vai"
            id=""
            onChange={ this.handleChange }
          />
        </label>
      </form>
    )
  }
}