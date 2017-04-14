/**
 * Created by anselmo on 19/01/17.
 */

class Bind {

    constructor(model, view, ...props) {

        let proxy = ProxyFactory.create(model, props, model =>
            view.update(model));

        view.update(model);

        return proxy;
    }
}