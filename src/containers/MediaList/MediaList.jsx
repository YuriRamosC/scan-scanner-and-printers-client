import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import './estilos.css';
class MediaList extends Component {
    state = {}
    render() {
        return (
            <div className='media-list'>
                <Card bg='light' text='dark' className='media-list'>
                    <Card.Header as="h5">Locações</Card.Header>
                    <Card.Body className='flex'>
                        <img
                            width={180}
                            height={180}
                            className="samsung4070 align-self-center mr-3 card-ds card bg-light text-dark"
                            src="https://www.santarosapaper.com.br/media/wysiwyg/impressoras/Samsung_SL-M4070FR.jpg"
                            alt="Generic placeholder"
                        />
                        <Card.Text className='align-self-center'>
                            <h5>Samsung 4070</h5>
                            <table>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-sitemap"></i>
                                        <span className='negrito'>Conectividade: </span>Rede Ethernet, USB 2.0
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-tachometer"></i>
                                        <span className='negrito'>Velocidade Max de Impressão: </span>40 ppm
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-tint"></i>
                                        <span className='negrito'>Impressão Colorida: </span>Não
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-file-o"></i>
                                        <span className='negrito'>Tamanho de Papel: </span>
                        A4 210 x 297 mm, A5 148 x 210 mm, A6 105 × 148 mm, Carta 215 x 279 mm, Ofício 216 x 356 mm
                        </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-fax"></i>
                                        <span className='negrito'>Função Fax: </span>Sim
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-cogs"></i>
                                        <span className='negrito'>Tecnologia: </span>Laser
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-cube"></i>
                                        <span className='negrito'>Dimensões(L x A x P): </span>46,9 x 48,2 x 44,4 cm
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <i className="icone fa pull-left fa-border fa-stop"></i>
                                        <span className='negrito'>Peso sem Caixa: </span>17,11 kg
                                </td>
                                </tr>
                            </table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MediaList;