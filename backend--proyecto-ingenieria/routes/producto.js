const express = require('express');
const { getProducto, createProducto, getProductos, updateProducto, deleteProducto, getProductosFecha } = require('../controller/productos.controller');
const {  getProductosDepartamentoCategoria } = require('../controller/productoDepartamento');
const { getProductoCalificacion } = require('../controller/productoUsuario')
const router = express.Router();

router.get('/', getProductos);

router.get('/departamento/:idDepartamento/categoria/:idCategoria', getProductosDepartamentoCategoria);

router.get('/obtenerFechaProducto/:fecha', getProductosFecha);

router.get('/precioProducto/:precioMin/:precioMax/:fecha/:calificacion', getProductoCalificacion);

router.get('/:id', getProducto);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

module.exports = router;
