module.exports =  (cargosObrigatorios) =>( req, res, proximo ) => {

    req.user.cargo = 'assinante'

    if (cargosObrigatorios.indexOf(req.user.cargo) === -1) {
        console.log('Esta rota está bloquada');
    }

    proximo()
}