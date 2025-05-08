const { PrismaClient } = require("@prisma/client") // importar o prisma
const jwt = require("jsonwebtoken") // importar o jwt

const userController = {
    login: async (req, res) => {
        const { email, senha } = request.body

        if (!email || !senha) {
            return res.status(400).json({
                msg: "Campos inválidos"
            })
        }

        // SELECT * FROM users WHERE email = email
        const userEncontrado = await prisma.User.findAll({
            where: {
                email
            }
        })

        if (!userEncontrado) {
            return res.status(403).json({
                msg: "Email ou senha incorretos"
            })
        }

        const isCerto = await prisma.bcrypt.compare(senha, userEncontrado.senha)

        if (!isCerto) {
            return res.status(401).json({
                msg: "Email ou senha incorretos"
            })
        }

        // payload -> Conteudo de dentro do JWT
        // somente o necessário para a apllicação
        const payload = {
            id: userEncontrado.id,
            email: userEncontrado.email
        }

        // palavra secreta -> paodequeijo
        const token = jwt.sign(payload, "paodequeijo", {
            expiresIn: "1h" // tempo de expiração do token
        })

        return res.status(200).json({
            token,
            msg: "Usuário autenticado com sucesso"
        })
    },  
    create: async (request, response) => {
        try {

            const { email, nome, senha } = request.body
            // senha criptografada
            const hashedsenha = await prisma.bcrypt.hash(senha, 10) // 10 é o número de rounds de criptografia 

            await User.create({ email, nome, senha: hashedsenha })


            if (!nome || !email || !senha) {
                return response.status(400).json({
                    msg: "Campos inválidos"
                })
            }

            return response.status(200).json({
                msg: 'O User foi criado com sucesso',
                userCriado
            })

        } catch (error) {
            console.log(error)

            return response.status(500).json({
                msg: 'Ocorreu um erro ao acessar a api'
            })
        }

    },
    update: async (request, response) => {
        try {
            const { id } = request.params
            const { email, nome, senha } = request.body

            if (!email || !nome || !senha) {
                return response.status(400).json({
                    msg: "Campos faltando"
                })
            }

            const userExiste = await prisma.User.findByPk(id)

            if (!userExiste) {
                return response.status(400).json({
                    msg: "User não encontrado"
                })
            }

            await prisma.User.update({
                email, nome, senha
            }, {
                where: {
                    id: id
                }
            })

            return response.status(200).json({
                msg: "User atualizado com sucesso"
            })

        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: "Ocorreu um erro ao atualizar o User"
            })

        }
    },
    findAll: async (request, response) => {
        try {
            const user = await prisma.User.findAll()

            return response.status(200).json(user)

        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao buscar todos os user"
            })
        }
    },
    delete: async (request, response) => {
        try {

            const { id } = request.params

            const existeUser = await prisma.User.findByPk(id)

            if (!existeUser) {
                return response.status(400).json({
                    msg: "User não foi encontrado"
                })
            }

            await prisma.User.destroy({
                where: {
                    id: id
                }
            })

            return response.status(200).json({
                msg: "User deletado com sucesso!"
            })

        } catch (error) {
            console.log(error)
            return response.status(500).json({
                msg: "Ocorreu um erro interno ao deletar o User"
            })

        }
    }
}              

module.exports = userController