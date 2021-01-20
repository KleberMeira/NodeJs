const app = require('../app');
const usuarioController = require('../controllers/usuario.controller');
const middlewaresAutenticacao = require('../middlewares/middlewares.autenticacao');

app.route('/usuario/logout').get(middlewaresAutenticacao.bearer, usuarioController.logout);