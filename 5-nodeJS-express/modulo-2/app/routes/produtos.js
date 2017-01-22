/**
 * Created by anselmo on 21/01/17.
 */
var connectFactory = require('../../config/connectFactory');

module.exports = function (app) {

    app.get('/produtos', function(req,res){
        var mysql = require('mysql');
        var connection = connectFactory();

        connection.query('select * from livros',function(err,results){
            res.render('produtos/lista', {lista:results});

        });

        connection.end();
    });

}
