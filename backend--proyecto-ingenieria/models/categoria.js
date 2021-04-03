var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Categoria extends Model { }

Categoria.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'categoria',
        timestamps: false
    }
);


module.exports = Categoria;