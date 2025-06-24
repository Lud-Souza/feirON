const Usuario = require('./usuario');
const Cliente = require('./cliente');
const Feirante = require('./feirante');
const Categoria = require('./categorias');
const Produto = require('./produtos');
const Pedido = require('./pedido');
const ItemPedido = require('./item_pedido');
const Avaliacao = require('./avaliacao');

// Relacionamento Usuário <-> Cliente (1:1)
Usuario.hasOne(Cliente, { foreignKey: 'id_usuario' });
Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Relacionamento Usuário <-> Feirante (1:1)
Usuario.hasOne(Feirante, { foreignKey: 'id_usuario' });
Feirante.belongsTo(Usuario, { foreignKey: 'id_usuario' });

// Categoria <-> Produto (1:N)
Categoria.hasMany(Produto, { foreignKey: 'id_categoria' });
Produto.belongsTo(Categoria, { foreignKey: 'id_categoria' });

// Feirante <-> Produto (1:N)
Feirante.hasMany(Produto, { foreignKey: 'id_feirante' });
Produto.belongsTo(Feirante, { foreignKey: 'id_feirante' });

// Cliente <-> Pedido (1:N)
Cliente.hasMany(Pedido, { foreignKey: 'id_cliente' });
Pedido.belongsTo(Cliente, { foreignKey: 'id_cliente' });

// Pedido <-> ItemPedido (1:N)
Pedido.hasMany(ItemPedido, { foreignKey: 'id_pedido' });
ItemPedido.belongsTo(Pedido, { foreignKey: 'id_pedido' });

// Produto <-> ItemPedido (1:N)
Produto.hasMany(ItemPedido, { foreignKey: 'id_produto' });
ItemPedido.belongsTo(Produto, { foreignKey: 'id_produto' });

// Cliente <-> Avaliacao (1:N)
Cliente.hasMany(Avaliacao, { foreignKey: 'id_cliente' });
Avaliacao.belongsTo(Cliente, { foreignKey: 'id_cliente' });

// Produto <-> Avaliacao (1:N)
Produto.hasMany(Avaliacao, { foreignKey: 'id_produto' });
Avaliacao.belongsTo(Produto, { foreignKey: 'id_produto' });
