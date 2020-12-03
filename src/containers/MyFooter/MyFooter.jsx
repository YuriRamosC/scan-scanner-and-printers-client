import React, { Component } from 'react';
import './estilos.css'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import * as Icon from 'react-bootstrap-icons';
class MyFooter extends Component {
    state = {}
    render() {
        return (
            <footer className='my-footer'>
                <CardDeck>
            <Card text='light'>
                <Card.Body>
                <Card.Subtitle>Contacts</Card.Subtitle>
                    Yuri Ramos Canário Campos
                    <br/>
                    <Icon.TelephoneFill/> +55 41 98535-7065
                    <br/>
                    <Icon.EnvelopeFill/> yuriramoscc@gmail.com
                    <br/>
                    <a className='link' href='https://github.com/YuriRamosC/'>Github</a>
                </Card.Body>
            </Card>
                </CardDeck>
            </footer>
        );
    }
}

export default MyFooter;