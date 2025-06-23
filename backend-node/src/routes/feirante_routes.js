const express = require('express');
const router = express.Router();
const controller = require('../controllers/feirante_controller');

router.get('/', controller.getFeirantes);
router.post('/', controller.addFeirante);

module.exports = router;
