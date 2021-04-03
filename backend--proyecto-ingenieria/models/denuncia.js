var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Denuncia extends Model { }

Denuncia.init({
    
    Contenido: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'denuncia',
        timestamps: false
    }
);


module.exports = Denuncia;