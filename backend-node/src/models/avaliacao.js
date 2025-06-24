const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Avaliacao = sequelize.define('Avaliacao', {
  id_avaliacao: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  id_cliente: {
    type: DataTypes.UUID,
    allowNull: false
  },
  id_produto: {
    type: DataTypes.UUID,
    allowNull: false
  },
  nota: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  data_avaliacao: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'avaliacoes',
  timestamps: false
});

module.exports = Avaliacao;
