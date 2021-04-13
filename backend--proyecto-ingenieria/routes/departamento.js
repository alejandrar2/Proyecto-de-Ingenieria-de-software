const express = require('express');
const {getDepartamentos, createDepartamento}= require('../controller/departamentos');
const router = express.Router();


router.post('/', createDepartamento);

router.get('/', getDepartamentos);


module.exports = router;