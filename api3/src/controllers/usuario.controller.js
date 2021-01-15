

const jwt = require('jsonwebtoken');


function criaTokenJWT(usuario){
    const payload = {
        id: usuario.id
    };
    const token = jwt.sign(payload, 'senha-secreta')
    return token;s
}

login: (req, res) => {
    const token = criaTokenJWT(req.user)
    res.set('Authorization', token);
    res.status(204).send();
}