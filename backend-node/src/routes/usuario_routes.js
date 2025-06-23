const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario_controller');

router.get('/', controller.getUsuarios);
router.post('/', controller.addUsuario);

module.exports = router;
