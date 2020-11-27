import React, { Component } from 'react';
import Lista from '../Lista';

class Base extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    mostrarLista() {
        this.setState({ Lista})
    }

    home(){
        this.setState({ })
    }

    render() { 
        return (
            <section>
                
            </section>
        );
    }
}
 
export default Base;