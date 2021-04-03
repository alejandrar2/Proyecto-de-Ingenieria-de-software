var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Persona extends Model { }

Persona.init({
    nombre: DataTypes.STRING,
    apellido:DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    genero: DataTypes.STRING,
    

},
    {
        sequelize,
        modelName: 'persona',
        timestamps: false
    }
);


module.exports = Persona;