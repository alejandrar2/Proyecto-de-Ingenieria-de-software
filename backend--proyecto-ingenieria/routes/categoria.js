const express = require('express');
const { getCategoria, createCategoria, getCategorias, updateCategoria, deleteCategoria } = require('../controller/categorias.controller');
const router = express.Router();

router.get('/', getCategorias);

router.get('/:id', getCategoria);

router.post('/', createCategoria);

router.put('/:id', updateCategoria);

router.delete('/:id', deleteCategoria);

module.exports = router;
