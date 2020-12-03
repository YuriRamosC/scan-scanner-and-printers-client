import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './estilos.css';
class Cards extends Component {
    state = {  }
    render() { 
        return (<CardDeck>
            <Card bg='dark' text='light' className='card-ds'>
                <Card.Header as="h5">Locações</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Samsung 4070, Samsung 4080, Epson 5710, Canon 6030.
                            </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="https://www.santarosapaper.com.br/locacoes">
                        <Button className='navigation-button'><span>Clique aqui</span></Button>
                    </Card.Link>
                </Card.Footer>
            </Card>
            <Card bg='success' text='light' className='card-ds'>
                <Card.Header as="h5">Materiais para Escritório</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Calculadoras, Canetas, Estiletes, Pranchetas, Colas, Corretivos e muito mais.
                            </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="https://www.santarosapaper.com.br/materiais-para-escritorio">
                        <Button className='navigation-button'><span>Clique aqui</span></Button>
                    </Card.Link>
                </Card.Footer>
            </Card>
            <Card bg='light' text='dark' className='card-ds'>
                <Card.Header as="h5">Papelaria</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Papéis brancos em caixa, resmas de papéis coloridos, papéis fotográficos...
                            </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="https://www.santarosapaper.com.br/papelaria">
                        <Button className='navigation-button'><span>Clique aqui</span></Button>
                    </Card.Link>
                </Card.Footer>
            </Card>
        </CardDeck>
        );
    }
}
 
export default Cards;