const Feirante = require('../models/feirante');

exports.getFeirantes = async (req, res) => {
  try {
    const feirantes = await Feirante.findAll();
    res.json(feirantes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar feirantes', detalhes: error.message });
  }
};

exports.addFeirante = async (req, res) => {
  try {
    const novo = await Feirante.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar feirante', detalhes: error.message });
  }
};
