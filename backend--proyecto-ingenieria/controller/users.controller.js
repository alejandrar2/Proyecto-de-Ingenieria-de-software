const { response, request } = require('express');
const Producto = require('../models/producto');
const User = require('../models/user');

// OBTENER USUARIOS
const getUsers = async (req = request, res = response) => {

    const users = await User.findAll();

    if (users.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(users);


}

//CREAR USUARIOS
const createUser = async (req = request, res = response) => {

    const newUser = await User.create(req.body);
    res.send(newUser);

}

//OBTENER UN USUARIO
const getUser = async (req = request, res = response) => {

    const user = await User.findOne({
        where: {
            id: req.params.id
        }
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
        correo: req.body.correo,
        contraseña: req.body.contraseña
    });

    res.send(user);

}

const deleteUser = async (req = request, res = response) => {

    const user = await User.findByPk(req.params.id);

    if (!user ) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    await User.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado:1, mensaje: `Usuario eliminado con exito` });

}




module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}