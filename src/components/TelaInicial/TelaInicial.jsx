import React, { Component } from 'react';
import Slider from '../../containers/Slider';
import Container from 'react-bootstrap/Container'
import './estilos.css';
import Cards from '../../containers/Cards/Cards';
class TelaInicial extends Component {
    state = {}
    render() {
        return (
            <section>
                <Container>
                    <Slider />
                </Container>
                <Container>
                    <Cards />
                </Container>
            </section>
        );
    }
}

export default TelaInicial;