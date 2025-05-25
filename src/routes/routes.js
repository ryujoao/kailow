const express = require('express')
const { PrismaClient } = require('@prisma/client')
const multer = require('multer');
const path = require('path');
const router = express.Router()
const prisma = new PrismaClient()

// Configuração do multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Salva imagens em 'uploads/img' e currículos em 'uploads/curriculo'
        if (file.fieldname === 'imgUrl') {
            cb(null, 'uploads/img');
        } else if (file.fieldname === 'curriculo') {
            cb(null, 'uploads/curriculo');
        } else {
            cb(null, 'uploads/others');
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

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


// Rota para editar perfil
router.post('/editar', upload.fields([
    { name: 'imgUrl', maxCount: 1 },
    { name: 'curriculo', maxCount: 3 }
]), async (req, res) => {

    try {
        const { id, descricao } = req.body;

        //busca o usuário pelo id
        const user = await prisma.user.findUnique({ where: { id: Number(id) } });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }

        const imgUrl = req.files['imgUrl'] ? req.files['imgUrl'][0].path : null;
        const curriculo = req.files['curriculo'] ? req.files['curriculo'][0].path : null;

        // Salva no banco (ajuste conforme sua lógica)
        const perfil = await prisma.editarPerfil.create({
            data: {
                email: user.email,
                nome: user.nome,
                descricao,
                imgUrl,
                curriculo
            }
        });

        return res.status(201).json(perfil);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao salvar alterações" });
    }
});

module.exports = router