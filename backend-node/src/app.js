const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importando rotas
app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/clientes', require('./routes/clienteRoutes'));
app.use('/feirantes', require('./routes/feiranteRoutes'));
app.use('/categorias', require('./routes/categoriaRoutes'));
app.use('/produtos', require('./routes/produtoRoutes'));
app.use('/pedidos', require('./routes/pedidoRoutes'));
app.use('/itens-pedido', require('./routes/itemPedidoRoutes'));
app.use('/avaliacoes', require('./routes/avaliacaoRoutes'));

module.exports = app;
