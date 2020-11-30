import React, { Component } from 'react';
import "./estilo.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Menu extends Component {
  _handleEventoInput(e) {
    if (e.type === 'click') {
      this.props.consumirImpressoras();
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
  _handleOfflines(e) {
    if (e.type === 'click') {
      this.props.consumirImpressorasOffline();
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
            <li><a href="#">Geral</a></li>
            <li><a href="#" onClick={this._handleOfflines.bind(this)}>Offlines</a></li>
            <li><a href="#" onClick={this._handleEventoInput.bind(this)}>Atualizar</a></li>
            <li><a href="#">PrintWayy</a></li>
            <li><a href="#">Monitoramento</a></li>
          </div>
        </nav>
      </section>
    );
  }
}

export default Menu;