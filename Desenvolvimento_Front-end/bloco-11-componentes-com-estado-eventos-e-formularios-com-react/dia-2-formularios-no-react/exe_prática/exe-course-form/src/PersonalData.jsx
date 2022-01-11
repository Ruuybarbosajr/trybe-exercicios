import React, { Component } from 'react';
import Adress from './personal data components/Adress';
import City from './personal data components/City';
import Email from './personal data components/Email';
import Id from './personal data components/Id';
import Name from './personal data components/Name';
import States from './personal data components/States';
import Type from './personal data components/Type';

export default class PersonalData extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      id: '',
      adress: '',
      city: '',
      states: '',
      type: '',
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  handleBlur = (response) => {
    // if (!isNaN(this.state.city[0])) this.setState({ city: '' })
    if (response) this.setState({ city: '' })
  }

  render() {

    const { name, email, id, adress, city, states, type } = this.state;

    return (
      <fieldset className="personal-data">

        <legend>Dados Pessoais</legend>

        <Name value={ name } onChange={ this.handleChange } />
        <Email value={ email } onChange={ this.handleChange } />
        <Id value={ id } onChange={ this.handleChange } />
        <Adress value={ adress } onChange={ this.handleChange } />
        <City value={ city } onChange={ this.handleChange } onBlur={ this.handleBlur } />
        <States value={ states } onChange={ this.handleChange } />
        <Type value={ type } onChange={ this.handleChange } />

      </fieldset>
    )
  }
}