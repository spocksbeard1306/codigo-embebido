var mongoose = require('mongoose');
var models = require('./models.js');
var db = require('../env.js').db;

mongoose.connect('mongodb://localhost/'+db.nom,function(err){
    if(err){
        console.log('Error de conexión');
        return;
    }
    console.log('Conectado');
    var user = new models.User({
        nombre: 'Elvis Torres Pérez',
        email: 'elvistorres@gmail.com'
    });
    console.log('Documento User creado');
    user.save(function(err, user){
        if(err){
            console.log('Error al insertar usuario');
            return;
        }
        console.log('Documento User guardado');
        mongoose.connection.close();
        console.log('Conexión cerrada');
    });
});
