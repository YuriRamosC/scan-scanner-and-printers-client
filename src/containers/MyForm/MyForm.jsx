import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.scan_status = '';
        this.scan_observation = '';
        this.state = { ...this.state, impressora: this.props.impressora, showHide: false }
    }
    handleModalShowHide() {
        this.setState({impressora: this.props.impressora, showHide: !this.state.showHide })
    }
    handleModalSave(){
        Promise.resolve(this.props.helper.editarObservacoes(this.state.impressora.id_way, this.scan_status, this.scan_observation))
        .then((res) =>{
            this.handleModalShowHide();
            this.props.showMessage(this.props.impressora.serialNumber+' atualizada ...');
            this.props.helper.notificar('');
        });
    }
    selectedChange(e) {
        this.scan_status = e.target.value;
    }
    textChange(e) {
        this.scan_observation = e.target.value;
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
                                    <select defaultValue={this.state.impressora.scan_status} onChange={this.selectedChange.bind(this)} class="form-control" id="scan_status" name="scan_status" placeholder="Selecione o Status">
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
                                <textarea cols="20" rows="10" id="scan_observation" name="scan_observation" placeholder="Adicione observações..." class="form-control" onChange={this.textChange.bind(this)} defaultValue={this.state.impressora.scan_observation}></textarea>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <input type='submit' value='Cancelar' class='btn btn-danger' onClick={() => this.handleModalShowHide()} />
                        <input type="submit" value="Salvar" class="btn btn-success" onClick={() => this.handleModalSave()} />
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default MyForm;