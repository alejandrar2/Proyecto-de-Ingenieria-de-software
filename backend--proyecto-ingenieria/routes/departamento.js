const express = require('express');
const {getDepartamentos}= require('../controller/departamentos');
const router = express.Router();



router.get('/', getDepartamentos);


module.exports = router;