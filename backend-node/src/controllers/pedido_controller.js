const Pedido = require('../models/pedido');

exports.getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar pedidos', detalhes: error.message });
  }
};

exports.addPedido = async (req, res) => {
  try {
    const novo = await Pedido.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar pedido', detalhes: error.message });
  }
};
