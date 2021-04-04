const { response, request } = require('express');
const Administradores = require('../models/administrador');
const Personas = require('../models/persona');



// OBTENER ADMINISTRADORES
const getAdministradores = async (req = request, res = response) => {

    const administradorList = await Administradores.findAll({
        include: [
            {
                model: Personas,
            },

        ]
    });

    if (administradorList.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(administradorList);


}

//CREAR ADMINISTRADORES
const createAdministrador = async (req = request, res = response) => {

    let newPersona = await Personas.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero

    });
    
    let newAdministrador = await Administradores.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero,
        correo: req.body.correo,
        password: req.body.password,
        personaId: newPersona.id

    })

    res.send({ newAdministrador });
    res.send({ newAdministrador, newPersona });

}

//OBTENER UN ADMINISTRADOR
const getAdministrador = async (req = request, res = response) => {

    const administrador = await Administrador.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas
        }]
    });

    if (!administrador) {
        return res.send({ mensaje: `Administrador no existe` });
    }

    res.send(administrador);

}

// ACTUALIZAR ADMINISTRADOR
const updateAdministrador = async (req = request, res = response) => {

    const { body } = req;

    const administrador = await Administrador.findByPk(req.params.id);
    const persona = await Personas.findByPk(body.personaId);

    if (administrador && persona) {

        await administrador.update({
            correo: body.correo
        });

        await persona.update({
            apellido: body.apellido,
            direccion: body.direccion,
            genero: body.genero,
            nombre: body.nombre,
            telefono: body.telefono
        });

        res.send({ ok: true, mensaje: 'Actualizado con exito!' })

    } else {
        res.json({ mensaje: 'Elemento no encontrado' });
    }

}

//ELIMINAR ADMINISTRADOR

const deleteAdministrador = async (req = request, res = response) => {

    const administrador = await Administrador.findByPk(req.params.id);

    if (!administrador) {
        return res.send({ mensaje: `Administrador no existe` });
    }

    await Administrador.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado: 1, mensaje: `Administrador eliminado con exito` });

}
//LOGIN ADMINISTRADOR

const loginAdministrador = async (req = request, res = response) => {

    const administrador = await Administradores.findOne({
        where: {
            correo: req.body.correo,
            password: req.body.password
        }
    });

    if (!administrador) {
        return res.send({ mensaje: `Administrador no existe`, ok: false });
    } else {
        return res.send({ administrador: administrador.id, ok: true });
    }
}

module.exports = {
    getAdministradores,
    getAdministrador,
    createAdministrador,
    updateAdministrador,
    deleteAdministrador,
    loginAdministrador
}