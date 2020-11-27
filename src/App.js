import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css'
import './assets/css/App.css';
import Menu from './components/Menu'
import Lista from './components/Lista'
import Impressoras from './data/impressoras';
import Base from './components/Base'


class App extends Component {
  constructor() {
    super();
    this.impressoras = new Impressoras();
  }
  render() {
    return (
      <section>
        <Menu consumirImpressoras={this.impressoras.consumirImpressoras.bind(this.impressoras)}/>
        <Base />
      </section>
    )
  };
}

export default App;
