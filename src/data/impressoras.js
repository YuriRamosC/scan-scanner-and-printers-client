import axios from 'axios';

export default class Impressoras {
    constructor() {
        this.impressoras = [];
        this._observers = [];
    }

    inscrever(func) {
        this._observers.push(func);
    }
    notificar() {
        this._observers.forEach(func => func(this.impressoras));
    }
    desinscrever(func) {
        this._observers = this._observers.filter(f => f !== func);
    }

    consumirImpressoras() {
        console.log('aqui');
        axios.get('192.168.100.108:3000/api-impressoras')
            .then(res => this.impressoras = res.impressoras);
        this.notificar();
    }
}