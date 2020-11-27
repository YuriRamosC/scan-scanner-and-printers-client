import api from '../api/api'

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
        api.get('api-impressoras')
            .catch(err =>{
                console.log('Erro:');
                console.log(err);
                console.log(err.response);
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers)
            })
            .then(res => console.log(res));
        this.notificar();
    }
}