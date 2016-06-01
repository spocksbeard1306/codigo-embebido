var express = require('express');

var app = express();

app.set('views', __dirname +'/views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.get('/', function(req, res){
    var pregunta = [
        {titulo:"Ayuda en javascript, AJAX no devuelve data.", tags:"javascript, aax", respuestas: "2", fecha: "hace 2 horas", estado: "Resuelto"},
        {titulo:"Renderizar javascript en Jade con Express JS.", tags:"nodejs, express, jade", respuestas: "1", fecha: "ayer", estado: "Sin resolver"}
    ];
    res.render('index', { lista : pregunta});
})
app.listen(4000);