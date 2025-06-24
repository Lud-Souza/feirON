const ItemPedido = require('../models/item_pedido');

exports.getItens = async (req, res) => {
  try {
    const itens = await ItemPedido.findAll();
    res.json(itens);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar itens do pedido', detalhes: error.message });
  }
};

exports.addItem = async (req, res) => {
  try {
    const novo = await ItemPedido.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar item do pedido', detalhes: error.message });
  }
};
