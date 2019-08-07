var express = require('express');
var app = express();
const models = require('./app/models');

app.get('/users', async (req, res) => {
  const allUser = await models.cliente.findAll({ limit: 1 });
  allUser.map(function(res,i){
    console.log("aqui "+i,res.nome)
  })
}); //Listar todos

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
