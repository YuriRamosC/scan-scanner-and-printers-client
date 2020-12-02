import React, { Component } from 'react';
import Slider from '../Slider';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

class TelaInicial extends Component {
    state = {}
    render() {
        return (
            <section>
                <Slider />
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>Locações</Card.Title>
                                <Card.Subtitle>Propostas conforme a sua demanda</Card.Subtitle>
                                <Card.Text>
                                    Samsung 4070, Samsung 4080, Epson 5710, Canon 6030.
                                </Card.Text>
                                <Card.Link href="https://www.santarosapaper.com.br/locacoes">Clique aqui</Card.Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>Materiais para Escritório</Card.Title>
                                <Card.Subtitle>Organização, Materiais e muito mais</Card.Subtitle>
                                <Card.Text>
                                    Calculadoras, Canetas, Estiletes, Pranchetas, Colas, Corretivos e muito mais.
                                </Card.Text>
                                <Card.Link href="https://www.santarosapaper.com.br/materiais-para-escritorio">Clique aqui</Card.Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Title>Papelaria</Card.Title>
                                <Card.Subtitle>Ideal para o seu escritório.</Card.Subtitle>
                                <Card.Text>
                                    Papéis brancos em caixa, resmas de papéis coloridos, papéis fotográficos...
                                </Card.Text>
                                <Card.Link href="https://www.santarosapaper.com.br/papelaria">Clique aqui</Card.Link>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default TelaInicial;