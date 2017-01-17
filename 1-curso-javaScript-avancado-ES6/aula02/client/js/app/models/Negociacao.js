/**
 * Created by anselmo on 12/01/17.
 */

class Negociacao {
    constructor(data, quatidade, valor){
        this._data = data;
        this._quantidade = quatidade;
        this._valor = valor;
        Object.freeze(this); // congela a instância do objeto

    }

    get data() {
        //return this._data;
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}