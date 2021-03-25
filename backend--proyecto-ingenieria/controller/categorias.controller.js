const { response, request } = require('express');
const Categoria = require('../models/categoria');


// OBTENER CATEGORIAS
const getCategorias = async (req = request, res = response) => {

    const categorias = await Categoria.findAll();

    if (categorias.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(categorias);


}

//CREAR CATEGORIA
const createCategoria = async (req = request, res = response) => {

    const newCategoria = await Categoria.create(req.body);
    res.send(newCategoria);

}

//OBTENER UNA CATEGORIA
const getCategoria = async (req = request, res = response) => {

    const user = await Categoria.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!user) {
        return res.send({ mensaje: `Usuario no existe` });
    }

    res.send(user);

}

// ACTUALIZAR CATEGORIA
const updateCategoria = async (req = request, res = response) => {

    const categoria = await User.findByPk(req.params.id);

    if (!categoria) {
        return res.send({ mensaje: `Categoria no existe` });
    }

    await categoria.update({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });

    res.send(categoria);

}

//ELIMINAR CATEGORIA
const deleteCategoria = async (req = request, res = response) => {

    const categoria = await Categoria.findByPk(req.params.id);

    if (!Categoria ) {
        return res.send({ mensaje: `Categoria no existe` });
    }

    await Categoria.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ codigoResultado:1 ,mensaje: `Categoria eliminado con exito` });

}




module.exports = {
    getCategorias,
    getCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria
}