import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/css/bootstrap.min.css'
import './assets/css/App.css';
import Menu from './components/Menu'
import Lista from './components/Lista'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Impressoras from './data/impressoras';
import Base from './components/Base'


class App extends Component {
  constructor() {
    super();
    this.impressoras = new Impressoras();
    this.navegacao = 0;
  }

  render() {
    return (
      <section>
        <Menu consumirImpressoras={this.impressoras.consumirImpressoras.bind(this.impressoras)}
          consumirImpressorasOffline={this.impressoras.consumirImpressorasOffline.bind(this.impressoras)} />

          <Lista impressoras={this.impressoras} />

      </section>
    )
  };
}

export default App;
