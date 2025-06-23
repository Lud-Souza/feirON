const express = require('express');
const router = express.Router();
const controller = require('../controllers/item_pedido_controller');

router.get('/', controller.getItens);
router.post('/', controller.addItem);

module.exports = router;
