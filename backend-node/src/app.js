const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importando rotas
app.use('/usuarios', require('./routes/usuario_routes'));
app.use('/clientes', require('./routes/cliente_routes'));
app.use('/feirantes', require('./routes/feirante_routes'));
app.use('/categorias', require('./routes/categorias_routes'));
app.use('/produtos', require('./routes/produtos_routes'));
app.use('/pedidos', require('./routes/pedido_routes'));
app.use('/itens-pedido', require('./routes/item_pedido_routes'));
app.use('/avaliacoes', require('./routes/avaliacao_routes'));

module.exports = app;
