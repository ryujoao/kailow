const jwt = require('jsonwebtoken')

// Middleware -> Autenticação
function authenticate(req, res, next) {
    // capturando token da requisição
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({
            msg: "Token não fornecido"
        })
    }

    const [bearer, token] = authHeader.split(" ")

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