const express = require('express');
const { createComentario, getComentarios } = require('../controller/comentarios.contraller');
const router = express.Router();

router.get('/', getComentarios);

router.post('/', createComentario);


module.exports = router;
