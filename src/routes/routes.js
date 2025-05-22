const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()
const prisma = new PrismaClient()

// Criar usuario
router.post("/cadastro", async (req, res) => {
    // recebe os dados do corpo da requisição
    const { nome, email, telefone, nascimento, senha } = req.body

    const userExist = await prisma.usuario.findUnique({
        where: { email }
    })

    if (userExist) {
        return res.status(400).json({ error: "E-mail já cadastrado" })
    }

    // Criar usuario
    const user = await prisma.usuario.create({
        data: {
            nome,
            email,
            telefone,
            nascimento,
            senha
        }
    })

    return res.status(201).json(user)
})

router.put("/cadastro/:id", async (req, res) => {
    const { id } = req.params
    const { nome, senha } = req.body

    const user = await prisma.usuario.findUnique({ where: { id: Number(id) } })

    if (!user) {
        return res.status(404).json({ error: "Usuario não encontrado" })
    }

    const updateUser = await prisma.usuario.update({
        where: { id: Number(id) },
        data: {
            nome,
            senha
        }
    })

    return res.status(200).json(updateUser)

})

router.post("/login", async (req, res) => {
    const { email, senha } = req.body

    const user = await prisma.usuario.findUnique({
        where: { email }
    })

    if (!user) {
        return res.status(401).json({ error: "E-mail ou senha incorretos" })
    }

    if (senha != user.senha) {
        return res.status(400).json({ error: "E-mail ou senha incorretos" })
    }

    return res.json({ message: "Login bem sucedido" })
})

module.exports = router