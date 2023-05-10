const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Restaurante = new Schema({
    nome: {
        type: String
    },
    cidade: {
        type: String
    },
    bairro: {
        type: String
    },
    rua: {
        type: String
    }
}, {
}, {
    collection: 'restaurante'
});

module.exports = mongoose.model('Restaurante', Restaurante);