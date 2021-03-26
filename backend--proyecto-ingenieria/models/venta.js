var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Venta extends Model { }

Venta.init({
    fecha: DataTypes.DATE,
    
},
    {
        sequelize,
        modelName: 'venta',
        timestamps: false
    }
);


module.exports = Venta;