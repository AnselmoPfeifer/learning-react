/**
 * Created by anselmo on 15/01/17.
 */

/*
    let hoje = new Date();
    let outraData = new Date('2016/05/17'); // formato ano/mês/dia
    let outraData = new Date('2016/05/17');
    console.log(outraData.getDate()); // imprime 17
    console.log(outraData.getMonth()); // imprime 4
    console.log(outraData.getFullYear()); // imprime 2016
    let outraDataOutraManeira = new Date(2016, 4, 17);
    let dataString = '17-05-2016';


    let dataString = '17-05-2016';

    dataString = dataString.split('-').reverse().join('/');

    let data = new Date(dataString);

    console.log(data);
*/
let dataString = '17-05-2016';

let data = new Date(dataString.split('-').reverse().join('/'));
console.log(data);

let data = new Date(...this._inputData
    .value.split('-')
    .map((item, indice) => {
        return item - indice % 2;
    }));

let data = new Date(this._inputData.value.split('-'));
console.log(data);

let data = new Date(this._inputData.value.replace(/-/g, ','));
console.log(data);

// Passando os dados para o contrutor da class Negocioacao
let negociacao = new Negociacao(
    this._inputData.value,
    this._inputQuantidade.value,
    this._inputValor.value
);

    // Adicionar a Negocioacao numa lista
