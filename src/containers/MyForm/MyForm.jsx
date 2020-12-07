import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.state, impressora: this.props.impressora, showHide: false }
    }
    handleModalShowHide() {
        console.log('clicou');
        this.setState({ showHide: !this.state.showHide })
    }
    render() {
        return (
            <>
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Editar
                </Button>
                <Modal show={this.state.showHide}>
                    <Modal.Header>{this.state.impressora.customer_name}</Modal.Header>
                    <Modal.Body>
                        <form action="#" method="post">
                            <div class="row">
                                <div class="form-group col">
                                    <select value={this.state.impressora.scan_status} class="form-control" id="scan_status" name="scan_status" placeholder="Selecione o Status">
                                        <option value=''>Nenhum</option>
                                        <option value='andre'>André</option>cantCheck
                                        <option value='devilPrinter'>Impossível!!</option>
                                        <option value='cantCheck'>Impossível checagem presencial</option>
                                        <option value='noMonitoring'>Sem monitoramento</option>
                                        <option value='recentlyLost'>Novo (em observação)</option>
                                        <option value='keven'>Passado para Keven</option>
                                        <option value='everythingOk'>Não precisa conferir</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="descricao">Observações:</label>
                                <textarea cols="20" rows="10" id="scan_observation" name="scan_observation" placeholder="Adicione observações..." class="form-control" value={this.state.impressora.scan_observation}></textarea>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <input type='submit' value='Cancelar' class='btn btn-danger' onClick={() => this.handleModalShowHide()} />
                        <input type="submit" value="Salvar" class="btn btn-success" onClick={() => this.handleModalShowHide()} />
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MyForm;