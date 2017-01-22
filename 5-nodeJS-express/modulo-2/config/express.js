/**
 * Created by anselmo on 21/01/17.
 */

module.exports = function () {
    var app = require('express')();
    app.set('view engine','ejs');
    app.set('views', './app/views');
    return app;
}