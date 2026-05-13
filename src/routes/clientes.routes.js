const express = require('express');
const router = express.Router();
const { crearCliente, listarClientes, obtenerCliente, actualizarCliente, eliminarCliente } = require('../controllers/clientes.controller');

router.post('/', crearCliente);
router.get('/', listarClientes);
router.get('/:id', obtenerCliente);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;