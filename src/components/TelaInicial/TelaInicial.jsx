import React, { Component } from 'react';
import Slider from '../Slider';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import './estilos.css';
class TelaInicial extends Component {
    state = {}
    render() {
        return (
            <section>
                <Slider />
                <Container>
                    <Row>
                        <Col>
                            <Card text='light' className="mb-2 card bg-primary">
                                <Card.Header as="h5">Locações</Card.Header>
                                <Card.Subtitle>Propostas conforme a sua demanda</Card.Subtitle>
                                <Card.Text>
                                    Samsung 4070, Samsung 4080, Epson 5710, Canon 6030.
                                </Card.Text>
                                <Card.Link href="https://www.santarosapaper.com.br/locacoes">Clique aqui</Card.Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card text='white' className="mb-2 card bg-success">
                                <Card.Header as="h5">Materiais para Escritório</Card.Header>
                                <Card.Subtitle>Organização, Materiais e muito mais</Card.Subtitle>
                                <Card.Text>
                                    Calculadoras, Canetas, Estiletes, Pranchetas, Colas, Corretivos e muito mais.
                                </Card.Text>
                                <Card.Link href="https://www.santarosapaper.com.br/materiais-para-escritorio">Clique aqui</Card.Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card text='light' className="mb-2 card bg-info">
                                <Card.Header as="h5">Papelaria</Card.Header>
                                <Card.Subtitle>Ideal para o seu escritório.</Card.Subtitle>
                                <Card.Text>
                                    Papéis brancos em caixa, resmas de papéis coloridos, papéis fotográficos...
                                </Card.Text>
                                <Card.Link className='button' href="https://www.santarosapaper.com.br/papelaria">Clique aqui</Card.Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TelaInicial;