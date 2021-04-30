const { response, request } = require('express');
const Producto = require('../models/producto');
const User = require('../models/user');
const productoUsuario = require('../models/productoUsuario');
const { Op } = require("sequelize");

const getProductoCalificacion = async (req = request, res = response) => {

    const precioProducto = await productoUsuario.findAll({

        include: [
            {
                model: Producto,
                where: {
                    fecha: {

                        [Op.eq]: req.params.fecha
                    },
                    precio: {

                        [Op.between]: [req.params.precioMin, req.params.precioMax]
                    }

                }

            },
            {
                model: User,
                where: {

                    calificacion: req.params.calificacion
                }
            }
        ]
        
    });
  
    res.send(precioProducto);
}

module.exports = {
    getProductoCalificacion
}