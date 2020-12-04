import React, { Component } from 'react';
import "./estilo.css";
import 'font-awesome/css/font-awesome.min.css';
import STRING_CONSTANTS from '../../data/constants';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
class Menu extends Component {
  _handleGeral(e) {
    if (e.type === 'click') {
      this.props.mudarTela(STRING_CONSTANTS.GERAL);
    }
  }
  _handleImpressoras(e) {
    if (e.type === 'click') {
      this.props.consumirImpressoras();
      this.props.mudarTela(STRING_CONSTANTS.LISTA);
    }
  }
  _handleImpressorasOffline(e) {
    if (e.type === 'click') {
      this.props.consumirImpressorasOffline();
      this.props.mudarTela(STRING_CONSTANTS.OFFLINE);
    }
  }
  _handleAtualizar(e) {
    if (e.type === 'click') {
      this.props.atualizarImpressoras();
    }
  }
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" className="menu" variant='dark' text='light' sticky='top'>
        <Navbar.Brand href="#home">Scan Scanners and Printers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={this._handleGeral.bind(this)}>Geral</Nav.Link>
            <Nav.Link href="#" onClick={this._handleImpressoras.bind(this)}>Lista</Nav.Link>
            <Nav.Link href="#" onClick={this._handleImpressorasOffline.bind(this)}>Offlines</Nav.Link>
            <Nav.Link href="#" onClick={this._handleAtualizar.bind(this)}>Atualizar</Nav.Link>
            <Nav.Link href="#">PrintWayy</Nav.Link>
            <Nav.Link href="#">Monitoramento</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;