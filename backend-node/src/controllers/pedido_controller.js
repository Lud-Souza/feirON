const Pedido = require('../models/pedido');

exports.getPedidos = (req, res) => {
  res.json(Pedido.getAllPedidos());
};

exports.addPedido = (req, res) => {
  const novo = Pedido.createPedido(req.body);
  res.status(201).json(novo);
};
