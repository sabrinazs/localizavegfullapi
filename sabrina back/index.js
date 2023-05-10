const express = require('express'); //importando o pacote
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//db conexao
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)});

//centraliza todas as config da aplicação
const restauranteRoute = require('./routes/restaurante.route');
const app = express(); //instanciando o express

app.use(cors());
// permite que os recursos fornecidos pelo express seja usado em toda aplicação
app.use(express());
app.use(bodyParser.json());


app.use('/restaurante', restauranteRoute);



// sera executado na porta 3000
app.listen(3000, () => {
    console.log('servidor conectado na porta 3000')
});