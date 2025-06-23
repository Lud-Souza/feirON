const Feirante = require('../models/feirante');

exports.getFeirantes = (req, res) => {
  res.json(Feirante.getAllFeirantes());
};

exports.addFeirante = (req, res) => {
  const novo = Feirante.createFeirante(req.body);
  res.status(201).json(novo);
};
