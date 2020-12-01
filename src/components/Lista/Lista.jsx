import React, { Component } from 'react';
import "./estilo.css";
class Lista extends Component {
    constructor(props) {
        super(props);
        this._novasImpressoras = this._novasImpressoras.bind(this);
        this.state = { impressoras: [], titulo: ''};
    }
    componentDidMount() {
        this.props.impressoras.inscrever(this._novasImpressoras);
    }

    componentWillUnmount() {
        this.props.impressoras.desinscrever(this._novasImpressoras);
    }
    _novasImpressoras(impressoras, titulo) {
        this.setState({ ...this.state, impressoras: impressoras, titulo: titulo});
        console.log(titulo);
    }

    render() {
        return (
            <section>
                <main className="conteudoPrincipal">
                    <div className="container-fluid">
                        <h1>{this.state.titulo} {this.state.impressoras.length}</h1>
                        <table id="impressoras" className="table table-striped table-hover table-responsive-lg">
                            <thead className="thead-light">
                                <tr>
                                    <th>Empresa</th>
                                    <th>Fabricante</th>
                                    <th>Modelo</th>
                                    <th>Número de Série</th>
                                    <th>Ponto</th>
                                    <th>IP da Máquina</th>
                                    <th>Ultima Comunicação</th>
                                    <th>Alterar Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.impressoras.map((impressora, index) => {
                                    return (
                                        <tr className={`status_` + impressora.scan_status} title={`` + impressora.scan_status + ` - ` + impressora.scan_observation} id={impressora.id}>
                                            <td>{impressora.customer_name}</td>
                                            <td>{impressora.manufacturer}</td>
                                            <td>{impressora.model}</td>
                                            <td>{impressora.serialNumber}</td>
                                            <td>{impressora.installationPoint}</td>
                                            <td>{impressora.ipAddress}</td>
                                            <td>{impressora.lastCommunication}</td>
                                            <td>Editar</td>
                                        </tr>
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