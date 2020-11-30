import React, { Component } from 'react';
import './assets/css/bootstrap.min.css'
import './assets/css/App.css';
import Menu from './components/Menu'
import Lista from './components/Lista'
import Titulo from './components/Titulo'
import Impressoras from './data/impressoras';


class App extends Component {
  constructor() {
    super();
    this.impressoras = new Impressoras();
    this.titulos = ['Lista','Offline'];
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
