import api from '../api/api';

export default class Impressoras {
    constructor() {
        this.impressoras = [];
        this._observers = [];
    }

    inscrever(func) {
        this._observers.push(func);
    }
    notificar(titulo) {
        console.log('notificar ativado');
        this._observers.forEach(func => func(this.impressoras, titulo));
    }

    desinscrever(func) {
        this._observers = this._observers.filter(f => f !== func);
    }

    consumirImpressoras() {
        api.get('api-impressoras')
            .catch(err => {
                console.log('Erro:');
                console.log(err.response);
            })
            .then(res => this.impressoras = res.data.impressoras)
            .then(res => this.notificar('Impressoras'));
    }
    consumirImpressorasOffline() {
        api.get('api-impressoras-offline')
            .catch(err => {
                console.log('Erro:');
                console.log(err.response);
            })
            .then(res =>this.impressoras = res.data.impressoras)
            .then(res => this.notificar('Impressoras Offline'));
    }
    atualizarImpressoras(){
        return api.get('impressoras-printwayy')
        .catch(err => {
            console.log('Erro:');
            console.log(err.response);
        })
        .then((res) => {
            this.notificar('');
        });
    }

    editarObservacoes(id_way, scan_status, scan_observation) {
        return api.post('api-impressoras-offline', {id_way: id_way, scan_status: scan_status, scan_observation: scan_observation})
        .catch(err=>{
            console.log('Erro:');
            console.log(err);
        })
        .then((res) =>{
            this.notificar('');
            return res;
        })
    }
}