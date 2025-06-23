const { v4: uuidv4 } = require('uuid');

let avaliacoes = [];

function getAllAvaliacoes() {
  return avaliacoes;
}

function createAvaliacao({ id_cliente, id_produto, nota, comentario, data_avaliacao }) {
  const nova = {
    id_avaliacao: uuidv4(),
    id_cliente,
    id_produto,
    nota,
    comentario,
    data_avaliacao
  };
  avaliacoes.push(nova);
  return nova;
}

module.exports = { getAllAvaliacoes, createAvaliacao };
