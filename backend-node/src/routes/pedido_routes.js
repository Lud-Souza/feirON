const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedidoController');

router.get('/', controller.getPedidos);
router.post('/', controller.addPedido);

module.exports = router;
