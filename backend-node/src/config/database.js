// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/banco.sqlite',
  logging: false // opcional: evita mostrar SQL no terminal
});

module.exports = sequelize;
