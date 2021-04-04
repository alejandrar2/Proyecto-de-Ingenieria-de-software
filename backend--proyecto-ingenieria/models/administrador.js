var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Administrador extends Model { }

Administrador.init({
    correo: DataTypes.STRING,
    password: DataTypes.STRING
    
},
    {
        sequelize,
        modelName: 'administrador',
        timestamps: false
    }
);


module.exports = Administrador;