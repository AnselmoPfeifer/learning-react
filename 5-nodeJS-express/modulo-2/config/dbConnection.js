/**
 * Created by anselmo on 21/01/17.
 */
var mysql = require('mysql');

module.exports = function () {

    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123',
        database : 'loja_livros'
    });

}