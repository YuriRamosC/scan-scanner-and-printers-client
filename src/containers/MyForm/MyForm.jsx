import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class MyForm extends Component {
    constructor(props) {
        super(props);
        console.log('renderizou');
        this.state = { ...this.state, impressora: this.props.impressora }
    }
    render() {
        return (
            <Modal show={this.state.open}>
                <Modal.Header>{this.state.impressora.customer_name}</Modal.Header>
                <Modal.Body>
                    <form action="/impressoras-offline" method="post">
                        <div class="row">
                            <div class="form-group col">
                                <select class="form-control" id="scan_status" name="scan_status" placeholder="Selecione o Status">
                                    <option selected>Nenhum</option>
                                    <option>André</option>
                                    <option>Impossível checagem presencial</option>
                                    <option>Sem monitoramento</option>
                                    <option>Novo (em observação)</option>
                                    <option>Passado para Keven</option>
                                    <option>Não precisa conferir</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="descricao">Observações:</label>
                            <textarea cols="20" rows="10" id="scan_observation" name="scan_observation" placeholder="Adicione observações..." class="form-control">${this.state.impressora.scan_observation}</textarea>
                        </div>
                        <input type="submit" value="Salvar" class="btn btn-primary" />
                    </form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        );
    }
}

export default MyForm;