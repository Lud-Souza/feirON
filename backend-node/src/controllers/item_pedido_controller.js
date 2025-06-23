const Item = require('../models/itemPedido');

exports.getItens = (req, res) => {
  res.json(Item.getAllItensPedido());
};

exports.addItem = (req, res) => {
  const novo = Item.createItemPedido(req.body);
  res.status(201).json(novo);
};
