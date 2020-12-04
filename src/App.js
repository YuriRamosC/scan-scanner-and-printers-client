import React, { Component } from 'react';
import './assets/css/bootstrap.min.css'
import './assets/css/App.css';
import Menu from './containers/Menu'
import STRING_CONSTANTS from './data/constants';
import Lista from './components/Lista'
import TelaInicial from './components/TelaInicial'
import Impressoras from './data/impressoras';
import MyFooter from './containers/MyFooter'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

class App extends Component {
  constructor() {
    super();
    this.impressoras = new Impressoras();
    this.state = {tela: STRING_CONSTANTS.GERAL};
  }
  mudarTela(tela) {
    this.setState({...this.state, tela: tela});
    console.log(this.state);
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
 showMessage(message) {
  store.addNotification({
    title: "Impressoras Atualizadas!",
    message: "As impressoras do sistema foram atualizadas com sucesso !",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: false
    }
  });
  }
  render() {
    return (
      <section>
        <ReactNotification />
        <Menu consumirImpressoras={this.impressoras.consumirImpressoras.bind(this.impressoras)}
          consumirImpressorasOffline={this.impressoras.consumirImpressorasOffline.bind(this.impressoras)} 
          atualizarImpressoras={this.impressoras.atualizarImpressoras.bind(this.impressoras)}
          mudarTela={this.mudarTela.bind(this)}
          showMessage={this.showMessage.bind(this)}/>
        {this.renderizarTela()}
        <MyFooter/>
      </section>
    )
  };
}

export default App;
