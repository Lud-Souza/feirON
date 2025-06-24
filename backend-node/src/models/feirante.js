const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Feirante = sequelize.define('Feirante', {
  id_feirante: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  id_usuario: {
    type: DataTypes.UUID,
    allowNull: false
  },
  nome_estabelecimento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'feirantes',
  timestamps: false
});

module.exports = Feirante;
