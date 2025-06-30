const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtos_controller');

router.get('/', controller.getProdutos);
router.post('/', controller.addProduto);

module.exports = router;
