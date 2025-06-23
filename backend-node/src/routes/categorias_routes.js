const express = require('express');
const router = express.Router();
const controller = require('../controllers/categorias_controller');

router.get('/', controller.getCategorias);
router.post('/', controller.addCategoria);

module.exports = router;
