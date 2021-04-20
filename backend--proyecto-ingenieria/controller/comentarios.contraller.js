const { response, request } = require('express');
const Comentario = require('../models/comentario');

//CREAR DEPARTAMENTO
const createComentario = async (req = request, res = response) => {

    const newComentario = await Comentario.create({
        contenido: req.body.contenido

    });
    res.send(newComentario);

}

// OBTENER COMENTARIOS
const getComentarios = async (req = request, res = response) => {

    const comentarios = await Comentario.findAll();

    if (comentarios.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(comentarios);
}

module.exports ={
    createComentario,
    getComentarios
}