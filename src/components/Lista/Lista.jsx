import React, { Component } from 'react';
class Lista extends Component {

    constructor(props) {
        super(props);
        this._novasImpressoras = this._novasImpressoras.bind(this);
        this.state = { impressoras: [] };
    }
    componentDidMount() {
        this.props.impressoras.inscrever(this._novasImpressoras);
    }

    componentWillUnmount() {
        this.props.impressoras.desinscrever(this._novasImpressoras);
    }
    _novasImpressoras(impressoras) {
        this.setState({ ...this.state, impressoras });
    }


    render() {
        return (
            <main className="conteudoPrincipal">
                <div className="container-fluid">
                    <h1>Impressoras</h1>
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
                                    <tr>
                                        <td>impressora.customer_name</td>
                                        <td>impressora.manufacturer</td>
                                        <td>impressora.model</td>
                                        <td>impressora.serialNumber</td>
                                        <td>impressora.installationPoint</td>
                                        <td>impressora.ipAddress</td>
                                        <td>impressora.lastCommunication</td>
                                        <td>Editar</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default Lista;