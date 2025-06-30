const Cliente = require('../models/cliente');

exports.getClientes = (req, res) => {
  res.json(Cliente.getAllClientes());
};

exports.addCliente = (req, res) => {
  const novo = Cliente.createCliente(req.body);
  res.status(201).json(novo);
};
