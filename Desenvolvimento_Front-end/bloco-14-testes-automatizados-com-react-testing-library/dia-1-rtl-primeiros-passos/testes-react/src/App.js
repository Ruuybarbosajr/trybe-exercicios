import React, { Component } from 'react';
import ValidEmail from './ValidEmail';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  handleChange = ({ target }) => {
    this.setState({ email: target.value })
  }

  handleClick = () => {
    const { email } = this.state
    this.setState({ saveEmail: email, email: '' });
  }

  render() {

    const { email, saveEmail } = this.state;
    return (
      <div className="App" >
        <label htmlFor="id-email">
          Email
          <input
            onChange={ this.handleChange }
            id="id-email"
            type="email"
            value={ email }
          />
        </label>
        <input
          onClick={ this.handleClick }
          id="btn-send"
          type="button"
          value="Enviar"
          data-testid="id-send"
        />
        <input
          id="btn-send"
          type="button"
          value="Voltar"
        />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}
