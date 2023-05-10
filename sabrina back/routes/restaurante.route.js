const express = require('express');
const app = express();
const restauranteRoutes = express.Router();

let Restaurantes = require('../model/restaurantes');

// api to add restaurante
restauranteRoutes.route('/add').post(function (req, res) {
    let restaurante = new Restaurantes(req.body);
    restaurante.save()
        .then(restaurante => {
            res.status(200).json({ 'status': 'success', 'mssg': 'restaurante added successfully' });
        })
        .catch(err => {
            res.status(409).send({ 'status': 'failure', 'mssg': 'unable to save to database' });
        });
});

// api to get restaurantes
restauranteRoutes.route('/').get(async function (req, res) {
    try {
        const restaurante = await Restaurantes.find();
        res.status(200).json({ 'status': 'success', 'restaurante': restaurante });
    } catch (err) {
        res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
    }
});


// api to get restaurante
restauranteRoutes.route('/restaurante/:id').get(function (req, res) {
    let id = req.params.id;
    Restaurantes.findById(id, function (err, restaurante) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'restaurante': restaurante });
        }
    });
});

// api to update route
//requisição = é o que o front esta me mandando
// resposta é o que vou devolver para ele
restauranteRoutes.route('/update/:id').put(function (req, res) {
    Restaurantes.findById(req.params.id, function (err, restaurante) {
        if (!restaurante) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            restaurante.nome = req.body.nome;
            restaurante.cidade = req.body.cidade;
            restaurante.bairro = req.body.bairro;
            restaurante.rua = req.body.rua;

            restaurante.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for delete
restauranteRoutes.route('/delete/:id').delete(function (req, res) {
    Restaurantes.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = restauranteRoutes;