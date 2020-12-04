import React, { Component } from 'react';
import "./estilo.css";
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
class Lista extends Component {
    constructor(props) {
        super(props);
        this._handleEditarStatus = this._handleEditarStatus.bind(this)
        this._novasImpressoras = this._novasImpressoras.bind(this);
        this.state = { impressoras: [], titulo: '' };
    }
    componentDidMount() {
        this.props.impressoras.inscrever(this._novasImpressoras);
    }

    componentWillUnmount() {
        this.props.impressoras.desinscrever(this._novasImpressoras);
    }
    _handleEditarStatus(e) {
        if (e.type === 'click') {
            console.dir(e.currentTarget.id)
        }
    }
    _novasImpressoras(impressoras, titulo) {
        this.setState({ ...this.state, impressoras: impressoras, titulo: titulo });
        console.log(titulo);
    }

    popover(impressora) {
        return (
            <Popover id="popover-basic">
                <Popover.Title as="h3">Dados</Popover.Title>
                <Popover.Content>
                    {`` + impressora.scan_status + ` - ` + impressora.scan_observation}
                </Popover.Content>
            </Popover>
        )
    };
    render() {
        return (
            <section>
                <main className="conteudoPrincipal">
                    <div className="container-fluid">
                        <h1>{this.state.titulo} {this.state.impressoras.length}</h1>
                        <table id="impressoras" className="table table-striped table-hover table-responsive-lg">
                            <thead className="thead-light">
                                <tr>
                                    <th className='printwayy-color'>Empresa</th>
                                    <th className='printwayy-color'>Fabricante</th>
                                    <th className='printwayy-color'>Modelo</th>
                                    <th className='printwayy-color'>Número de Série</th>
                                    <th className='printwayy-color'>Ponto</th>
                                    <th className='printwayy-color'>IP da Máquina</th>
                                    <th className='printwayy-color'>Ultima Comunicação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.impressoras.map((impressora, index) => {
                                    return (
                                        <OverlayTrigger trigger={['hover', 'focus']} placement='bottom' overlay={this.popover(impressora)}>
                                            <tr onClick={this._handleEditarStatus}  className={`status_` + impressora.scan_status} id={impressora.id_way}>
                                                <td>{impressora.customer_name}</td>
                                                <td>{impressora.manufacturer}</td>
                                                <td>{impressora.model}</td>
                                                <td>{impressora.serialNumber}</td>
                                                <td>{impressora.installationPoint}</td>
                                                <td>{impressora.ipAddress}</td>
                                                <td>{impressora.lastCommunication}</td>
                                            </tr>
                                        </OverlayTrigger>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </main>
            </section>
        );
    }
}

export default Lista;