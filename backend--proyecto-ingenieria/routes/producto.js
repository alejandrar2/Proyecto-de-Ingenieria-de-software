const express = require('express');
const { getProducto, createProducto, getProductos, updateProducto, deleteProducto } = require('../controller/productos.controller');
const router = express.Router();

router.get('/', getProductos);

router.get('/:id', getProducto);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

module.exports = router;
