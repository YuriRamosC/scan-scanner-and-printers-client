import React, { Component } from 'react';
import './estilos.css';
import LogModal from '../LogModal';
class BottomIcon extends Component {
    state = {  }

    render() { 
        return (
            <div>
                <LogModal impressoras={this.props.impressoras}/>
            </div>
        );
    }
}
 
export default BottomIcon;