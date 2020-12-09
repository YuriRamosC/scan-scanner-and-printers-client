import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import api from '../../api/api';

class LogModal extends Component {
    constructor(props) {
        super(props);
        this.handleModalShowHide.bind(this);
        this.atualizarLog = this.atualizarLog.bind(this);
        this.state = { ...this.state, texto: 'Empty' };
    }
    componentWillUnmount() {
        this.props.impressoras.desinscrever(this.atualizarLog);
    }
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    atualizarLog() {
        console.log('Atualizou log');
        console.log(this);
        api.get('log')
            .catch(err => {
                console.log('Erro:');
                console.log(err);
            })
            .then((res) => {
                var resultado = res.data.log.toString();
                this.setState({ ...this.state, texto: resultado });
            })
    }
    componentDidMount() {
        this.props.impressoras.inscrever(this.atualizarLog);
        this.atualizarLog();
    }
    render() {
        return (
            <section>
                <>
                    <a className='bottom-icon-log' href="#" onClick={() => this.handleModalShowHide()}></a>
                    <Modal show={this.state.showHide} size='lg'>
                        <Modal.Header>Log de Conexões das Máquinas</Modal.Header>
                        <Modal.Body className='log-body'>
                            {this.state.texto}
                        </Modal.Body>
                        <Modal.Footer>
                            <input type='submit' value='Fechar' className='btn btn-danger' onClick={() => this.handleModalShowHide()} />
                        </Modal.Footer>
                    </Modal>
                </>
            </section>);
    }
}

export default LogModal;