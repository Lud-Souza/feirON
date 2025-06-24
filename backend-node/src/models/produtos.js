const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  id_produto: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_feirante: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  tableName: 'produtos',
  timestamps: false
});

module.exports = Produto;
