var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Publicacion extends Model { }

Publicacion.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'publicacion',
        timestamps: false
    }
);


module.exports = Publicacion;