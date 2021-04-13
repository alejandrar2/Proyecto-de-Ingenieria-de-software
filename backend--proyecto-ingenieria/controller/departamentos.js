const { response, request } = require('express');
const Departamento = require('../models/departamento');


// OBTENER DEPARTAMENTOS
const getDepartamentos = async (req = request, res = response) => {

    const departamentos = await Departamento.findAll();

    if (departamentos.length == 0) {
        return res.send({ mensaje: 'No hay data' });
    }

    res.send(departamentos);


}

//CREAR DEPARTAMENTO
const createDepartamento = async (req = request, res = response) => {

    const newDepartamento = await Departamento.create({
        nombre: req.body.nombre

    });
    res.send(newDepartamento);

}

module.exports = {
    getDepartamentos,
    createDepartamento,

}