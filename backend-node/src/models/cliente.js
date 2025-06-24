const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.UUID,
    allowNull: false
  },
  endereco_entrega: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'clientes',
  timestamps: false
});

module.exports = Cliente;
