import React, { Component } from 'react';
import Slider from '../Slider';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './estilos.css';
class TelaInicial extends Component {
    state = {}
    render() {
        return (
            <section>
                <Container>
                    <Slider />
                </Container>
                <Container>
                    <CardGroup>
                        <Card className="card">
                            <Card.Body>
                                <Card.Header as="h5">Locações</Card.Header>
                                <Card.Text>
                                    Samsung 4070, Samsung 4080, Epson 5710, Canon 6030.
                                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://www.santarosapaper.com.br/locacoes">Clique aqui</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Body>
                                <Card.Header as="h5">Materiais para Escritório</Card.Header>
                                <Card.Text>
                                    Calculadoras, Canetas, Estiletes, Pranchetas, Colas, Corretivos e muito mais.
                                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href="https://www.santarosapaper.com.br/materiais-para-escritorio">Clique aqui</Card.Link>
                            </Card.Footer>
                        </Card>
                        <Card className="card">
                            <Card.Body>
                                <Card.Header as="h5">Papelaria</Card.Header>
                                <Card.Text>
                                    Papéis brancos em caixa, resmas de papéis coloridos, papéis fotográficos...
                                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link className='button' href="https://www.santarosapaper.com.br/papelaria">Clique aqui</Card.Link>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>
            </section>
        );
    }
}

export default TelaInicial;