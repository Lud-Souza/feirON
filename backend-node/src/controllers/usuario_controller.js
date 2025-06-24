const Usuario = require('../models/usuario');

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuários', detalhes: error.message });
  }
};

exports.addUsuario = async (req, res) => {
  try {
    const novo = await Usuario.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar usuário', detalhes: error.message });
  }
};
