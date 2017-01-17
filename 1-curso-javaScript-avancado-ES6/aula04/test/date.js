/**
 * Created by anselmo on 16/01/17.
 */
// Criar uma data
let data = new Date(
    ...this._inputData.value
        .split('-')
        .map((item, indice) => item - indice % 2)
);

// Exibe uma data
let diaMesAno = negociacao.data.getDate() +
    '/' + (negociacao.data.getMonth() + 1)+
    '/' + negociacao.data.getFullYear() +
    ' - ' + negociacao.data.getHours();

console.log(diaMesAno);