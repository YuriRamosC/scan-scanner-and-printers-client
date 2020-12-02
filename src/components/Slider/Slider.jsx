import React, { Component } from 'react';
import './estilos.css';
import Carousel from 'react-bootstrap/Carousel';
class Slider extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={2000}>
                    <a href="https://www.santarosapaper.com.br/">
                        <img
                            className="d-block w-100"
                            src="https://www.santarosapaper.com.br/media/wysiwyg/banners/principal-2.jpg"
                            alt="First slide"
                        />
                    </a>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <a href="https://api.whatsapp.com/send?l=pt_br&phone=5541984894802">
                        <img
                            className="d-block w-100"
                            src="https://www.santarosapaper.com.br/media/wysiwyg/banners/banners_principais3.png"
                            alt="Second slide"
                        />
                    </a>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <a href="https://www.linkedin.com/in/yuri-ramos-841212173/">
                        <img
                            className="d-block w-100"
                            src="https://www.santarosapaper.com.br/media/wysiwyg/banners/principal-1_1.jpg"
                            alt="Third slide"
                        />
                    </a>
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default Slider;