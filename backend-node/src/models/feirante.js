const { v4: uuidv4 } = require('uuid');

let feirantes = [];

function getAllFeirantes() {
  return feirantes;
}

function createFeirante({ id_usuario, nome_estabelecimento, descricao, localizacao }) {
  const novo = {
    id_feirante: uuidv4(),
    id_usuario,
    nome_estabelecimento,
    descricao,
    localizacao
  };
  feirantes.push(novo);
  return novo;
}

module.exports = { getAllFeirantes, createFeirante };
