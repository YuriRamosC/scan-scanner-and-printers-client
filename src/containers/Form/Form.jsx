import React, { Component } from 'react';
class Form extends Component {
    constructor(props) {
        super(props);
        this.impressora = this.props.impressora
        this.state = {...this.state, impressora: impressora}
    }
    render() {
        return (
            <section>
                <div class="container">
                    <h2>Alterar Impressora )</h2>
                    <h4>{this.impressora.customer_name}</h4>
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
                            <textarea cols="20" rows="10" id="scan_observation" name="scan_observation" placeholder="Adicione observações..." class="form-control">${data.impressora.scan_observation}</textarea>
                        </div>
                        <input type="submit" value="Salvar" class="btn btn-primary" />
                    </form>
                </div>
            </section >
        );
    }
}

export default Form;