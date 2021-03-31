const { response, request } = require('express');
const Producto = require('../models/producto');
const User = require('../models/user');
const Persona = require('../models/persona');



// OBTENER USUARIOS
const getUsers = async (req = request, res = response) => {

    const users = await User.findAll({
        include: [{
            model: Persona
        }]
    });


    if (users.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(users);


}

//CREAR USUARIOS
const createUser = async (req = request, res = response) => {

    // let newPersona = await Persona.create({
    //     nombre: req.body.nombre,
    //     apellido: req.body.apellido,
    //     telefono: req.body.telefono,
    //     direccion: req.body.direccion,
    //     genero: req.body.genero

    // });


    let newUser = await User.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero,
        correo: req.body.correo,
        password: req.body.password,
        // personaId: newPersona.id

    })

    res.send({ newUser });
    // res.send({ newUser, newPersona });

}

//OBTENER UN USUARIO
const getUser = async (req = request, res = response) => {

    const user = await User.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Persona
        }]
    });

    if (!user) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    res.send(user);

}

// ACTUALIZAR USUARIO
const updateUser = async (req = request, res = response) => {

    const user = await User.findByPk(req.params.id);

    if (!user) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    await user.update({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        genero: req.body.genero, 
        correo: req.body.correo,
        password: req.body.password
    });


    return res.send({ mensaje: `Usuario actualzado` });

    res.send(user);


    // let persona = await Persona.findByPk(user.personaId);

    // if (!persona) {

    //     return res.send({ mensaje: `Usuario no existe` });
    // }

    // await persona.update({

    //     nombre: req.body.nombre,
    //     apellido: req.body.apellido,
    //     telefono: req.body.telefono,
    //     direccion: req.body.direccion,
    //     genero: req.body.genero,
    // })

    // return res.send({ mensaje: `Usuario actualzado` });

    // res.send(user);

}

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

    const user = await User.findOne({
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