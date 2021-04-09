const express = require('express');
const { getProducto, createProducto, getProductos, updateProducto, deleteProducto, getProductosCategoria } = require('../controller/productos.controller');
const {getProductosDepartamento} = require('../controller/productoDepartamento');
const router = express.Router();

router.get('/', getProductos);

router.get('/categoria/:id',getProductosCategoria);

router.get('/departamento/:id',getProductosDepartamento);

router.get('/:id', getProducto);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

module.exports = router;
