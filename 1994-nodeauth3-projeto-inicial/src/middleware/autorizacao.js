module.exports =  (cargosObrigatorios) =>( req, res, proximo ) => {

    if (cargosObrigatorios.indexOf(req.user.cargo) === -1) {
        res.status(403)
        res.end()
        return
    }

    proximo()
}