const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Usuario = require('./ ')

const blacklist = require('../redis/manipula.blacklist')

const jwt = require('jsonwebtoken')

passport.use(
 new LocalStrategy({

    usernameField: 'nome',
    passwordField: 'senha',
    session: false
 }, (nome, senha, done) => {

 })   
)

async function verificaTokenNaBlacklist(token){
   const tokenNaBlacklist = await blacklist.contemToken(token);
   if(tokenNaBlacklist){
      throw new jwt.JsonWebTokenError('Token inválido por logout');
   }
}

passport.use(
   new BearerStrategy(
      async(token, done) => {
         try{
            await verificaTokenNaBlacklist(token);
            const payload = jwt.verify(token, process.env.CHAVE_JWT);
            const usuario = await Usuario.buscaPorId(payload.id);
            done(null, usuario, { token: token });
         }catch(erro){
            done(erro);
         }
      }
   )
)