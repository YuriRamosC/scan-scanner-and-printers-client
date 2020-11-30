import React, { Component } from 'react';
import Lista from '../Lista';

class Base extends Component {
    constructor(props){
        super(props);
        this.state = {pagina:{} }
    }

    mostrarLista() {
        this.setState({ pagina: Lista})
    }

    home(){
        this.setState({ })
    }

    render() { 
        return (
            <section>
                {pagina}
            </section>
        );
    }
}
 
export default Base;