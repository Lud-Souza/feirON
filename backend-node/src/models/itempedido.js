const { v4: uuidv4 } = require('uuid');

let itensPedido = [];

function getAllItensPedido() {
  return itensPedido;
}

function createItemPedido({ id_pedido, id_produto, quantidade, preco_unitario }) {
  const novo = {
    id_item_pedido: uuidv4(),
    id_pedido,
    id_produto,
    quantidade,
    preco_unitario
  };
  itensPedido.push(novo);
  return novo;
}

module.exports = { getAllItensPedido, createItemPedido };
