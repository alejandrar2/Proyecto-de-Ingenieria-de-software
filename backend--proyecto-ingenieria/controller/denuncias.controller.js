const { response, request } = require('express');
const Denuncia = require('../models/denuncia');
const User = require('../models/user');


// OBTENER DENUNCIAS
const getDenuncias = async (req = request, res = response) => {

    const denuncias = await Denuncia.findAll({});

    res.send(denuncias);


}

//CREAR DENUNCIA
const createDenuncia = async (req = request, res = response) => {

    const newDenuncia = await Denuncia.create({
        contenido: req.body.data.contenido,
        userId: Number(req.body.userId)
    });

    console.log(req.body)

    res.send(newDenuncia);

}

//OBTENER UNA DENUNCIA
const getDenuncia = async (req = request, res = response) => {

    const denuncia = await Denuncia.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!denuncia) {
        return res.send({ mensaje: `Denuncia no existe` });
    }

    res.send(denuncia);

}

//ELIMINAR DENUNCIA
const deleteDenuncia = async (req = request, res = response) => {

    const denuncia = await Denuncia.findByPk(req.params.id);

    if (!Denuncia) {
        return res.send({ mensaje: `Denuncia no existe` });
    }

    await Denuncia.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado: 1, mensaje: `Denuncia eliminada con exito` });

    //AGREGAR DENUNCIA USUARIO



}




module.exports = {
    getDenuncias,
    getDenuncia,
    createDenuncia,
    deleteDenuncia
}