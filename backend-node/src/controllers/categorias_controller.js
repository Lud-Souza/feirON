const Categoria = require('../models/categorias');

exports.getCategorias = (req, res) => {
  res.json(Categoria.getAllCategorias());
};

exports.addCategoria = (req, res) => {
  const nova = Categoria.createCategoria(req.body);
  res.status(201).json(nova);
};
