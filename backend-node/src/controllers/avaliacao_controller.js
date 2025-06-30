const Avaliacao = require('../models/avaliacao');

exports.getAvaliacoes = (req, res) => {
  res.json(Avaliacao.getAllAvaliacoes());
};

exports.addAvaliacao = (req, res) => {
  const nova = Avaliacao.createAvaliacao(req.body);
  res.status(201).json(nova);
};
