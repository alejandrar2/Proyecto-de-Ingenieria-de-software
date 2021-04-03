var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');

class User extends Model { }

User.init({
    nombre: DataTypes.STRING,
    apellido:DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    genero: DataTypes.STRING,
    correo: DataTypes.STRING,
    password: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    }
);


module.exports = User;