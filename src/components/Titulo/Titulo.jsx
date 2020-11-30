import React, { Component } from 'react';
class Titulo extends Component {
    constructor(props) {
        super(props)
        this.state = { titulo: this.props.titulo };
    }
    _mudarTitulo(titulo) {
        this.setState({ ...this.state, titulo });
    }
    render() { 
        return ( 
            <h1>{this.state.titulo}</h1>
        );
    }
}
 
export default Titulo;