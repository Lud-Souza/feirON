const Avaliacao = require('../models/avaliacao');

exports.getAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await Avaliacao.findAll();
    res.json(avaliacoes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar avaliações', detalhes: error.message });
  }
};

exports.addAvaliacao = async (req, res) => {
  try {
    const nova = await Avaliacao.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar avaliação', detalhes: error.message });
  }
};
