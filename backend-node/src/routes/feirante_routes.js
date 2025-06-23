const express = require('express');
const router = express.Router();
const controller = require('../controllers/feiranteController');

router.get('/', controller.getFeirantes);
router.post('/', controller.addFeirante);

module.exports = router;
