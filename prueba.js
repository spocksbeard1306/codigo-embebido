var express = require('express');

var app = express();

app.set('views', __dirname +'/views');

app.set('view engine', 'jade');

app.use(express.static('public'));

app.get('/', function(req, res){
  var pregunta = [{titulo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, nobis.", tags:"electronica", respuestas: "2", fecha: "asked 28 secs ago"}]

    res.render('problemas', { lista : pregunta});
  })

app.listen(3000);