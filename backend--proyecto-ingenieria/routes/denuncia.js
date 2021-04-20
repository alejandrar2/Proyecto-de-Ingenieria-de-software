const express = require('express');
const { getDenuncia, createDenuncia, getDenuncias, deleteDenuncia } = require('../controller/denuncias.controller');
const router = express.Router();

router.get('/', getDenuncias);

router.get('/:id', getDenuncia);

router.post('/', createDenuncia);



router.delete('/:id', deleteDenuncia);

module.exports = router;