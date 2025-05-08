// Importa o express
const express = require('express');
const { PrismaClient } = require('../generated/prisma/client'); // Ajuste o caminho, se necessário

const prisma = new PrismaClient(); // Inicializa o cliente Prisma
// Criar um variavel para trabalhar com express
const router = express.Router();

router

router.get("/user/", async (req, res) => {
    const { nome } = req.body

    if (!user) {
        return res.status(401).json({ error: "Usuário não existe" })
    }

    return res.json({message: "Usuário encontrado"})
})

// Criar usuario
router.post("/user/registro", async (req, res) => {
    // recebe os dados do corpo da requisição
    const { nome, email, telefone, data, senha } = req.body

    const userExist = await prisma.user.findUnique({
        where: { email }
    })

    if (userExist) {
        return res.status(400).json({ error: "E-mail já cadastrado" })
    }

    // Criar usuario
    const user = await prisma.user.create({
        data: {
            nome,
            email,
            telefone,
            data,
            senha
        }
    })

    return res.status(201).json(user)
})

router.put("/user/update/:id", async (req, res) => {
    const { id } = req.params
    const { nome, email, telefone, data, senha } = req.body

    const user = await prisma.user.findUnique({ where: { id: Number(id) } })

    if (!user) {
        return res.status(404).json({ error: "user não encontrado" })
    }

    const updateUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
            nome,
            email,
            telefone,
            data,
            senha
        }
    })

    return res.status(200).json(updateUser)

})

router.post("/user/login", async (req, res) => {
    const { email, senha } = req.body

    const user = await prisma.user.findUnique({
        where: { email }
    })

    if (!user) {
        return res.status(401).json({ error: "E-mail ou senha incorretos" })
    }

    if (senha != user.senha) {
        return res.status(400).json({ error: "E-mail ou senha incorretos" })
    }

    return res.json({message: "Login bem sucedido"})
})



module.exports = router;