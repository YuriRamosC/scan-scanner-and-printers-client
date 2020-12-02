import React, { Component } from 'react';
import './assets/css/bootstrap.min.css'
import './assets/css/App.css';
import Menu from './components/Menu'
import STRING_CONSTANTS from './data/constants';
import Lista from './components/Lista'
import TelaInicial from './components/TelaInicial'
import Impressoras from './data/impressoras';


class App extends Component {
  constructor() {
    super();
    this.impressoras = new Impressoras();
    this.state = {tela: STRING_CONSTANTS.GERAL};
  }
  mudarTela(tela) {
    this.setState({tela: tela});
  }

  renderizarTela(){
    if(this.state.tela === STRING_CONSTANTS.LISTA) {
      return <Lista impressoras = {this.impressoras}/>
    }
    else if (this.state.tela === STRING_CONSTANTS.OFFLINE) {
      return <Lista impressoras = {this.impressoras}/>
    }
    else if(this.state.tela === STRING_CONSTANTS.GERAL){
      return <TelaInicial />
    }
  }

  render() {
    return (
      <section>
        <Menu consumirImpressoras={this.impressoras.consumirImpressoras.bind(this.impressoras)}
          consumirImpressorasOffline={this.impressoras.consumirImpressorasOffline.bind(this.impressoras)} 
          mudarTela={this.mudarTela.bind(this)}/>
        {this.renderizarTela()}
        
      </section>
    )
  };
}

export default App;
