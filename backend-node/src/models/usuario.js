const { v4: uuidv4 } = require('uuid');

let usuarios = [];

function getAllUsuarios() {
  return usuarios;
}

function createUsuario({ nome, email, senha, tipo_usuario }) {
  const novo = {
    id_usuario: uuidv4(),
    nome,
    email,
    senha,
    tipo_usuario // 'cliente', 'feirante', 'admin'
  };
  usuarios.push(novo);
  return novo;
}

module.exports = { getAllUsuarios, createUsuario };
