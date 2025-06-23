const { v4: uuidv4 } = require('uuid');

let categorias = [];

function getAllCategorias() {
  return categorias;
}

function createCategoria({ nome }) {
  const nova = {
    id_categoria: uuidv4(),
    nome
  };
  categorias.push(nova);
  return nova;
}

module.exports = { getAllCategorias, createCategoria };
