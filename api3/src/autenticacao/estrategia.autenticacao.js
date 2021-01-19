const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('./ ')


passport.use(
 new LocalStrategy({

    usernameField: 'nome',
    passwordField: 'senha',
    session: false
 }, (nome, senha, done) => {

 })   
)