const express = require('express');
const router = express.Router();
const controller = require('../controllers/pedido_controller');

router.get('/', controller.getPedidos);
router.post('/', controller.addPedido);

module.exports = router;
