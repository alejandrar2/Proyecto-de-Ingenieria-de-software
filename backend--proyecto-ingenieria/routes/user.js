const express = require('express');
const { getUser, createUser, getUsers, updateUser, deleteUser, login, updatecalificacion } = require('../controller/users.controller');
const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUser);

router.put('/calificacion/:id', updatecalificacion);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/login', login);


module.exports = router;
