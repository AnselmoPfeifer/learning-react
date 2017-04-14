/**
 * Created by anselmo on 17/01/17.
 */

class View {

    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método template deve ser implementado');
    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
