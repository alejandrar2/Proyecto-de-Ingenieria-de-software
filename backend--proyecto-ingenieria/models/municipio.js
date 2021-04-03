var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Municipio extends Model { }

Municipio.init({
    nombre: DataTypes.STRING,
    ubicacion:DataTypes.STRING
    
},
    {
        sequelize,
        modelName: 'municipio',
        timestamps: false
    }
);


module.exports = Municipio;