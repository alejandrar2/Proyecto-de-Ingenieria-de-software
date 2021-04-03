var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Departamento extends Model { }

Departamento.init({
    
    nombre: DataTypes.STRING
    
},
    {
        sequelize,
        modelName: 'departamento',
        timestamps: false
    }
);


module.exports = Departamento;