/**
 * Created by anselmo on 21/01/17.
 */
var dbConnection = require('../../config/dbConnection');

module.exports = function (app) {

    app.get('/produtos', function(req,res){
        var mysql = require('mysql');
        var connection = dbConnection();

        connection.query('select * from livros',function(err,results){
            res.render('produtos/lista', {lista:results});

        });

        connection.end();
    });

}
