/**
 * Created by anselmo on 17/01/17.
 */
class Mensagem {

    constructor(texto='') {

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {

        this._texto = texto;
    }
}