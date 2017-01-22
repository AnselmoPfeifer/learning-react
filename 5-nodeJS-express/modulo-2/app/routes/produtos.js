/**
 * Created by anselmo on 21/01/17.
 */
module.exports = function (app) {

    app.get('/produtos', function(req,res){
        res.render("produtos/lista");
    });

}
