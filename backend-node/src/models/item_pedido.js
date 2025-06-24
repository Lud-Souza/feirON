const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ItemPedido = sequelize.define('ItemPedido', {
  id_item_pedido: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  id_pedido: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_produto: {
    type: DataTypes.UUID,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  preco_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'itens_pedido',
  timestamps: false
});

module.exports = ItemPedido;
