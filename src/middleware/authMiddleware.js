const jwt = require('jsonwebtoken')

// Middleware -> Autenticação
function authenticate(req, res, next) {
    // capturando token da requisição
    const auhtHeader = req.headers.autorization

    if(!auhtHeader || !auhtHeader.startsWith("Bearer")) {
        return res.status(401).json({
            msg: "Token não fornecido"
        })
    }

    const [bearer, token] = auhtHeader.split(" ")

    try {
        req.user = jwt.verify(token, "paodequeijo")
        //caso token seja valido
        return next()
    } catch (error) {
        // token inválido ou mal formatado
        return res.status(401).json({
            msg: "Token inválido ou expirado"
        })
    }
}

module.exports = {authenticate}