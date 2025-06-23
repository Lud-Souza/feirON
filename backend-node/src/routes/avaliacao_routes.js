const express = require('express');
const router = express.Router();
const controller = require('../controllers/avaliacao_controller');

router.get('/', controller.getAvaliacoes);
router.post('/', controller.addAvaliacao);

module.exports = router;
