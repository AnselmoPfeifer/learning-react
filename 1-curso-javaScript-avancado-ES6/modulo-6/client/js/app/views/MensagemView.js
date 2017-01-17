/**
 * Created by anselmo on 17/01/17.
 */

class MensagemView {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return model.texto ? `<p class="alert alert-info text-center">${model.texto}</p>` : '<p></p>';
    }
}