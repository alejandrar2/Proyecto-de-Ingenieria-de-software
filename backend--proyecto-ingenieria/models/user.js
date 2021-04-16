var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');

class User extends Model { }

User.init({
    
    correo: DataTypes.STRING,
    password: DataTypes.STRING,
    calificacion: DataTypes.INTEGER,
    cantidadCalificacion: DataTypes.INTEGER
},
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    }
);

module.exports = User;