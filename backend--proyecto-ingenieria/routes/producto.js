const express = require('express');
const { getProducto, createProducto, getProductos, updateProducto, deleteProducto, getProductosCategoria, getProductosFecha,getPrecio } = require('../controller/productos.controller');
const {getProductosDepartamento} = require('../controller/productoDepartamento');
const router = express.Router();

router.get('/', getProductos);

router.get('/categoria/:id',getProductosCategoria);

router.get('/departamento/:idDepartamento/categoria/:idCategoria',getProductosDepartamento);

router.get('/obtenerFechaProducto/:fecha',getProductosFecha);

router.get('/precioProducto/:precioMin/:precioMax',getPrecio);

router.get('/:id', getProducto);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

module.exports = router;
