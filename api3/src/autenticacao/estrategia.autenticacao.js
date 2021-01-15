const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken')

passport.use(
    new BearerStrategy(
       async (token, done) => {

        try{
            const payload = jwt.verify(token, process.env.CHAVE_JWT);
            const usuario = await Usuario.buscaPorId(payload.id);
            done(null, usuario);
        }catch(erro){
            done(error);
        }
            
        }
    )
)