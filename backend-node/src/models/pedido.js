const { v4: uuidv4 } = require('uuid');

let pedidos = [];

function getAllPedidos() {
  return pedidos;
}

function createPedido({ id_cliente, data_pedido, status, valor_total }) {
  const novo = {
    id_pedido: uuidv4(),
    id_cliente,
    data_pedido,
    status,
    valor_total
  };
  pedidos.push(novo);
  return novo;
}

module.exports = { getAllPedidos, createPedido };
