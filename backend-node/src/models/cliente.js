const { v4: uuidv4 } = require('uuid');

let clientes = [];

function getAllClientes() {
  return clientes;
}

function createCliente({ id_usuario, endereco_entrega }) {
  const novo = {
    id_cliente: uuidv4(),
    id_usuario,
    endereco_entrega
  };
  clientes.push(novo);
  return novo;
}

module.exports = { getAllClientes, createCliente };
