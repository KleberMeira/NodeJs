

const passport = require('passport')
const { router } = require('../app')

module.exports = app => {
    app
    .route('/post')
    .get(postControlador.lista)
    .post(
        passport.authenticate('bearer', { session: false}),
        postControlador.adiciona
    );
}