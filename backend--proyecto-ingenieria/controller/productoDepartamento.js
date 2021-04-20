const { response, request } = require('express');
const Producto = require('../models/producto');
const productoDepartamento = require('../models/productoDepartamento');


//OBETENER PRODUCTOS POR DEPARTAMENTOS

const getProductosDepartamento = async (req = request, res = response) => {

    const productosDepartamento = await productoDepartamento.findAll({

        where:{
            departamentoId: req.params.id
        },

        include:[
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

module.exports ={
    getProductosDepartamento
}