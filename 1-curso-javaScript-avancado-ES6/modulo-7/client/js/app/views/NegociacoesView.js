/**
 * Created by anselmo on 17/01/17.
 */

class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    
                `).join('')}
            </tbody>
                  
            <tfoot class="alert-success footer">
                <td colspan="3" class="text-right">Total</td>
                <td class="text-center">
                <!--
                    ${
                        model.negociacoes.reduce(function(total, n) {
                        return total + n.volume;
                        }, 0.0)
                    }
                -->
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;
    }
}