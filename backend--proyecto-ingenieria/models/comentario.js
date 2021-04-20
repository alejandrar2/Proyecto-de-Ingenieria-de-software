var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');

class Comentario extends Model{ }

Comentario.init({
    
    contenido: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'comentario',
        timestamps: false
    }
);

module.exports = Comentario;