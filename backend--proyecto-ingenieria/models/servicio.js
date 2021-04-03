var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Servicio extends Model { }

Servicio.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha_incial: DataTypes.DATE,
    fecha_final: DataTypes.DATE
},
    {
        sequelize,
        modelName: 'servicio',
        timestamps: false
    }
);


module.exports = Servicio;