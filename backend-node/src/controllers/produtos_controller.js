const Produto = require('../models/produtos');

exports.getProdutos = (req, res) => {
  res.json(Produto.getAllProdutos());
};

exports.addProduto = (req, res) => {
  const novo = Produto.createProduto(req.body);
  res.status(201).json(novo);
};
