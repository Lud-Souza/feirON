const Produto = require('../models/produtos');

exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produtos', detalhes: error.message });
  }
};

exports.addProduto = async (req, res) => {
  try {
    const novo = await Produto.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar produto', detalhes: error.message });
  }
};
