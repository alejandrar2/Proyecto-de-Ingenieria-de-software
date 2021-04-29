const { response, request } = require('express');
const { model } = require('../database/conexion');
const Producto = require('../models/producto');
const productoDepartamento = require('../models/productoDepartamento');
const Departamento = require('../models/departamento');


//OBETENER PRODUCTOS POR DEPARTAMENTOS

const getProductosDepartamento = async (req = request, res = response) => {

    const productosDepartamento = await productoDepartamento.findAll({

        where: {
            departamentoId: req.params.id
        },

        include: [
            {
                model: Producto
            }
        ]
    });

    if (productosDepartamento.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(productosDepartamento);


}


//OBTENER PRODUCTOS DEPARTAMENTOS POR CATEGORIA   

const getProductosDepartamentoCategoria = async (req = request, res = response) => {

    const productosCategoria = await productoDepartamento.findAll({

        include: [
            {
                model: Producto,
                where: {
                    categoriumId: req.params.idCategoria
                }
            },
            {
                model: Departamento,
                where: {
                    id: req.params.idDepartamento
                }
            }
        ]
    });
    res.send(productosCategoria);
}

module.exports = {
    getProductosDepartamento,
    getProductosDepartamentoCategoria
}