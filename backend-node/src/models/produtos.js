const { v4: uuidv4 } = require('uuid');

let produtos = [];

function getAllProdutos() {
  return produtos;
}

function createProduto({ nome, descricao, preco, id_categoria, id_feirante }) {
  const novo = {
    id_produto: uuidv4(),
    nome,
    descricao,
    preco,
    id_categoria,
    id_feirante
  };
  produtos.push(novo);
  return novo;
}

module.exports = { getAllProdutos, createProduto };
