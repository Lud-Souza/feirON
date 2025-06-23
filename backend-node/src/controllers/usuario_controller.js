const Usuario = require('../models/usuario');

exports.getUsuarios = (req, res) => {
  res.json(Usuario.getAllUsuarios());
};

exports.addUsuario = (req, res) => {
  const novo = Usuario.createUsuario(req.body);
  res.status(201).json(novo);
};
