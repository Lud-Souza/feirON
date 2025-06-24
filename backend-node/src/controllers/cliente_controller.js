const Cliente = require('../models/cliente');

exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar clientes', detalhes: error.message });
  }
};

exports.addCliente = async (req, res) => {
  try {
    const novo = await Cliente.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar cliente', detalhes: error.message });
  }
};
