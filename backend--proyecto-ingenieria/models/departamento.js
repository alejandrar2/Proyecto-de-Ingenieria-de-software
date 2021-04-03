var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Departamento extends Model { }

Departamento.init({
    
<<<<<<< HEAD
    nombre: DataTypes.STRING,
    pais:DataTypes.STRING
=======
    nombre: DataTypes.STRING
>>>>>>> a6fedb7e723092c0c42f94300dbcc11deb2df4bb
    
},
    {
        sequelize,
        modelName: 'departamento',
        timestamps: false
    }
);


module.exports = Departamento;