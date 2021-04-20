var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Producto extends Model { }

Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
    descripcion: DataTypes.STRING,
    moneda: DataTypes.DOUBLE,
    imagen: DataTypes.STRING,
    estado: DataTypes.STRING,
    fecha: DataTypes.DATEONLY,
    comentario: DataTypes.STRING,
},
    {
        sequelize,
        modelName: 'producto',
        timestamps: false
    }
);


module.exports = Producto;