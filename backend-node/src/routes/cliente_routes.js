const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente_controller');

router.get('/', controller.getClientes);
router.post('/', controller.addCliente);

module.exports = router;
