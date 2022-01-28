import { Component } from 'react';
import './App.css';
const func = require('./service');

class App extends Component {
  constructor() {
    super()

    this.state = {
      obj: {}
    }
  }

  componentDidMount() {
    func.requestApi().then((response) => this.setState({ obj: response }))
  }

  render() {
    const { obj } = this.state;

    return (
      <img src={ obj.message } alt="cachorro" />
    );
  }
}

export default App;
