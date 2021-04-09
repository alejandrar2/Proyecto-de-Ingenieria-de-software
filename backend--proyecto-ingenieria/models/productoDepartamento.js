var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class productoDepartamento extends Model { }

productoDepartamento.init({
   
},
    {
        sequelize,
        modelName: 'productoDepartamento',
        timestamps: false
    }
);


module.exports = productoDepartamento;