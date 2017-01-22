/**
 * Created by anselmo on 21/01/17.
 */
module.exports = function (app) {

    app.get('/produtos', function(req,res){
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '123',
            database : 'loja_livros'
        });

        connection.query('select * from livros',function(err,results){
            res.render('produtos/lista', {lista:results});

        });

        connection.end();
    });

}
