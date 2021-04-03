const { response, request } = require('express');
const Producto = require('../models/producto');
const Users = require('../models/user');
const Personas = require('../models/persona');



// OBTENER USUARIOS
const getUsers = async (req = request, res = response) => {

    const usersList = await Users.findAll({
        include: [
            {
                model: Personas,
            },

        ]
    });


    if (usersList.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(usersList);


}

//CREAR USUARIOS
const createUser = async (req = request, res = response) => {

    let newPersona = await Persona.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero

    });


    let newUser = await User.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero,
        correo: req.body.correo,
        password: req.body.password,
        personaId: newPersona.id

    })

    res.send({ newUser });
    res.send({ newUser, newPersona });

}

//OBTENER UN USUARIO
const getUser = async (req = request, res = response) => {

    const user = await Users.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Personas
        }]
    });

    if (!user) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    res.send(user);

}

// ACTUALIZAR USUARIO
const updateUser = async (req = request, res = response) => {

    const { body } = req;

    const user = await Users.findByPk(req.params.id);
    const persona = await Personas.findByPk(body.personaId);

    if (user && persona) {

        await user.update({
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

//ELIMINAR USUARIO

const deleteUser = async (req = request, res = response) => {

    const user = await User.findByPk(req.params.id);

    if (!user) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    await User.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado: 1, mensaje: `Usuario eliminado con exito` });

}
//LOGIN USUARIO

const login = async (req = request, res = response) => {

    const user = await Users.findOne({
        where: {
            correo: req.body.correo,
            password: req.body.password
        }
    });

    if (!user) {
        return res.send({ mensaje: `Usuario no existe`, ok: false });
    } else {
        return res.send({ user: user.id, ok: true });
    }
}









module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login
}