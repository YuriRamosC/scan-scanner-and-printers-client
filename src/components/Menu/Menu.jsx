import React, { Component } from 'react';
import "./estilo.css";
import 'font-awesome/css/font-awesome.min.css';
import STRING_CONSTANTS from '../../data/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Menu extends Component {
  constructor(props) {
    super(props);
  }
  _handleGeral(e) {
    if(e.type ==='click') {
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
  componentDidMount() {
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    const menuBtn = document.querySelector(".menu-icon span");
    const items = document.querySelector(".nav-items");
    menuBtn.onclick = () => {
      items.classList.add("active");
      menuBtn.classList.add("hide");
    }
  }
  render() {
    return (
      <section>
        <nav className="navbar navbar-collapse menu">
          <div className="menu-icon">
            <span className="fas fa-bars"></span>
            </div>
          <div className="logo">
            Scan Scanners and Printers</div>
          <div className="nav-items">
            <li><a href="#" onClick={this._handleGeral.bind(this)}>Geral</a></li>
            <li><a href="#"  onClick={this._handleImpressoras.bind(this)}>Lista</a></li>
            <li><a href="#" onClick={this._handleImpressorasOffline.bind(this)}>Offlines</a></li>
            <li><a href="#">Atualizar</a></li>
            <li><a href="#">PrintWayy</a></li>
            <li><a href="#">Monitoramento</a></li>
          </div>s
        </nav>
      </section>
    );
  }
}

export default Menu;