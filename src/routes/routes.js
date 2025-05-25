const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

// Criar user -> Cadastro
router.post("/cadastro", async (req, res) => {
    // recebe os dados do corpo da requisição
    const { nome, email, telefone, nascimento, senha } = req.body
    console.log(nome, email, telefone, nascimento, senha)

    const userExistEmail = await prisma.user.findUnique({
        where: { email }
    })

    if (userExistEmail) {
        return res.status(400).json({ error: "*E-mail já cadastrado" })
    }

    const userExistTelefone = await prisma.user.findUnique({
        where: { telefone }
    })

    if (userExistTelefone) {
        return res.status(400).json({ error: "*Telefone já cadastrado" })
    }

    // Criar user
    const user = await prisma.user.create({
        data: {
            nome,
            email,
            telefone,
            nascimento: new Date(nascimento),
            senha
        }
    })

    return res.status(201).json(user)
})



router.put("/cadastro/:id", async (req, res) => {
    const { id } = req.params
    const { nome, senha } = req.body

    const user = await prisma.user.findUnique({ where: { id: Number(id) } })

    if (!user) {
        return res.status(404).json({ error: "*Usuário não encontrado" })
    }

    const updateUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
            nome,
            senha
        }
    })

    return res.status(200).json(updateUser)

})


// Login
router.post("/", async (req, res) => {
    const { email, senha } = req.body

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user || senha != user.senha) {
        return res.status(401).json({ error: "*E-mail ou senha incorretos" })
    }

    return res.json({ message: "Login bem sucedido" })
})

module.exports = router