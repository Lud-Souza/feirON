const Categoria = require('../models/categorias');

exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar categorias', detalhes: error.message });
  }
};

exports.addCategoria = async (req, res) => {
  try {
    const nova = await Categoria.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar categoria', detalhes: error.message });
  }
};
