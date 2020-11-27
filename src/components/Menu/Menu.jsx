import React, { Component } from 'react';
import "./estilo.css";
class Menu extends Component {
  _handleEventoInput(e) {
    if (e.type === 'click') {
      this.props.consumirImpressoras();
    }
  }

  render() {
    return (
      <section>
        <nav className="navbar navbar-collapse menu">
          <div className="menu-icon">
            <span className="fas fa-bars"></span></div>
          <div className="logo">
            Scan Scanners and Printers</div>
          <div className="nav-items">
            <li><a href="#">Geral</a></li>
            <li><a href="#">Offlines</a></li>
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