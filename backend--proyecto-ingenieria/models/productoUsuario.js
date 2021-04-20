var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class productoUsuario extends Model { }

productoUsuario.init({
   
},
    {
        sequelize,
        modelName: 'productoUsuario',
        timestamps: false
    }
);


module.exports = productoUsuario;