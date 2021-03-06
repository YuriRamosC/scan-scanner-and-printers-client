import React, { Component } from 'react';
import "./estilo.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import MyForm from '../../containers/MyForm'
class Lista extends Component {
    constructor(props) {
        super(props);
        this._novasImpressoras = this._novasImpressoras.bind(this);
        this.state = { impressoras: [], titulo: '' };
    }
    componentDidMount() {
        this.props.impressoras.inscrever(this._novasImpressoras);
    }

    componentWillUnmount() {
        this.props.impressoras.desinscrever(this._novasImpressoras);
    }
    _novasImpressoras(impressoras, titulo) {
        if(titulo){
        this.setState({ ...this.state, impressoras: impressoras, titulo: titulo });
        }
        else {
            this.setState({ ...this.state, impressoras: impressoras});
        }
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
                                    <th className='printwayy-clor'>Alterar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.impressoras.map((impressora, index) => {
                                    return (
                                        <OverlayTrigger trigger={['hover', 'focus', 'click']} placement='bottom-start' overlay={this.popover(impressora)}>
                                            <tr   className={`status_` + impressora.scan_status} id={impressora.id_way}>
                                                <td>{impressora.customer_name}</td>
                                                <td>{impressora.manufacturer}</td>
                                                <td>{impressora.model}</td>
                                                <td>{impressora.serialNumber}</td>
                                                <td>{impressora.installationPoint}</td>
                                                <td>{impressora.ipAddress}</td>
                                                <td>{impressora.lastCommunication}</td>
                                                <td><MyForm impressora={impressora} helper={this.props.impressoras} showMessage={this.props.showMessage}></MyForm></td>
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