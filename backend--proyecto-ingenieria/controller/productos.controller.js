const { response, request } = require('express');
const Producto = require('../models/producto');
const User = require('../models/user');
const { Op } = require("sequelize");
const productoDepartamento = require('../models/productoDepartamento')


// OBTENER PRODUCTOS
const getProductos = async (req = request, res = response) => {

    const productos = await Producto.findAll();

    if (productos.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(productos);


}

//CREAR PRODUCTO
const createProducto = async (req = request, res = response) => {

    const newProducto = await Producto.create({
        nombre: req.body.data.nombre,
        precio: req.body.data.precio,
        descripcion: req.body.data.descripcion,
        moneda: req.body.data.moneda,
        imagen: req.body.img,
        estado: req.body.data.estado,
        fecha: req.body.data.fecha,
        categoriumId: Number(req.body.data.categoriumId)

    });
    res.send(newProducto);

}

//OBTENER UN PRODUCTO
const getProducto = async (req = request, res = response) => {

    const producto = await Producto.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!producto) {
        return res.send({ mensaje: `Producto no existe` });
    }

    res.send(producto);

}

// ACTUALIZAR PRODUCTO
const updateProducto = async (req = request, res = response) => {

    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
        return res.send({ mensaje: `Producto no existe` });
    }

    await producto.update({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        moneda: req.body.moneda,
        imagen: req.body.imagen,
        estado: req.body.estado,
    });

    res.send(producto);

}

// ELIMINAR PRODUCTO
const deleteProducto = async (req = request, res = response) => {

    const producto = await Producto.findByPk(req.params.id);

    if (!producto) {
        return res.send({ mensaje: `Producto no existe` });
    }

    await Producto.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({ mensaje: `Producto eliminado con exito` });

}



//PRODUCTOS POR FECHA 

const getProductosFecha = async (req = request, res = response) => {

    const productosFecha = await Producto.findAll({

        where: {
            fecha: {

                [Op.eq]: req.params.fecha
            }

        }
    });

    if (productosFecha.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(productosFecha);


}

//OBTENER PRODUCTOS POR PRECIO

const getPrecio = async (req = request, res = response) => {

    const precioProducto = await Producto.findAll({

        where: {

            fecha: {

                [Op.eq]: req.params.fecha
            },
            precio: {

                [Op.between]: [req.params.precioMin, req.params.precioMax]
            }

        },
     

    });
    if (precioProducto.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(precioProducto);
}




module.exports = {
    getProductos,
    getProducto,
    createProducto,
    updateProducto,
    deleteProducto,
    getProductosFecha,
    getPrecio
}