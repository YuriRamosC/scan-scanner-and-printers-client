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
import { Slide } from "react-awesome-reveal";


class App extends Component {
  constructor() {
    super();
    this.impressoras = new Impressoras();
    this.state = { tela: STRING_CONSTANTS.GERAL };
  }
  mudarTela(tela) {
    this.setState({ ...this.state, tela: tela });
  }

  renderizarTela() {
    if (this.state.tela === STRING_CONSTANTS.LISTA) {
      return (
        <Slide direction='right' triggerOnce={false} cascade>
          <Lista impressoras={this.impressoras} showMessage={this.showMessage.bind(this)} />
        </Slide>
      )
    }
    else if (this.state.tela === STRING_CONSTANTS.OFFLINE) {
      return (
        <Slide direction='left' triggerOnce={false} cascade>
          <Lista impressoras={this.impressoras} showMessage={this.showMessage.bind(this)} />
        </Slide>)
    }
    else if (this.state.tela === STRING_CONSTANTS.GERAL) {
      return (
        <Slide direction='right' triggerOnce={false} cascade>
          <TelaInicial />
        </Slide>
      )
    }
  }
  showMessage(message) {
    store.addNotification({
      title: 'Sucesso',
      message: message,
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
          showMessage={this.showMessage.bind(this)} />
        {this.renderizarTela()}
        <MyFooter impressoras={this.impressoras} />
      </section>
    )
  };
}

export default App;
