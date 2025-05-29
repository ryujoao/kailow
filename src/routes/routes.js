const express = require('express')
const { PrismaClient } = require('@prisma/client')
const multer = require('multer');
const path = require('path');
const router = express.Router()
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');
const { authenticate } = require('../middleware/authMiddleware');

// Configuração do multer -> middleware para fazer upload de arquivos do cliente para o backend
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'imgUrl') {
            cb(null, 'uploads/img');
        } else if (file.fieldname === 'curriculo') {
            cb(null, 'uploads/curriculo');
        } else if (file.fieldname === 'anexar') {
            cb(null, 'uploads/anexar');
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

    const payload = {
        id: user.id,
        email: user.email
    }

    // palavra secreta -> paodequeijo
    const token = jwt.sign(payload, "paodequeijo", {
        expiresIn: "24h" // tempo de expiração do token
    })

    console.log("Token gerado:", token)

    return res.status(200).json({
        token,
        msg: "Token gerado com sucesso",
    })
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

    const payload = {
        id: user.id,
        email: user.email
    }

    // palavra secreta -> paodequeijo
    const token = jwt.sign(payload, "paodequeijo", {
        expiresIn: "24h" // tempo de expiração do token
    })

    console.log("Token gerado:", token)

    return res.status(200).json({
        token,
        userId: user.id,
        msg: "Token gerado com sucesso",
    })

})

// Editar perfil
router.post('/editar', upload.fields([
    { name: 'imgUrl', maxCount: 1 },
    { name: 'curriculo', maxCount: 3 }
]), authenticate, async (req, res) => {
    try {
        const { id, descricao } = req.body;

        // Busca o usuário pelo id
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
                curriculo,
                userId: user.id
            }
        });

        return res.status(201).json(perfil);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao salvar alterações" });
    }
});

// router.post("/editar", authenticate, async (req, res) => {
//     const { id, descricao, curriculo, imgUrl } = req.body;
//     console.log(req.user)

//     const user = await prisma.user.findUnique({ where: { id: Number(id) } });

//     if (!user) {
//         return res.status(404).json({ error: "*Usuário não encontrado" })
//     }

//     return res.status(201).json({
//         token,
//         msg: "Alterações salvas",
//     })

// })

// async (req, res) => {

//     try {
//         const { id, descricao } = req.body;

//         //busca o usuário pelo id
//         const user = await prisma.user.findUnique({ where: { id: Number(id) } });

//         if (!user) {
//             return res.status(404).json({ error: "Usuário não encontrado" });
//         }

//         const imgUrl = req.files['imgUrl'] ? req.files['imgUrl'][0].path : null;
//         const curriculo = req.files['curriculo'] ? req.files['curriculo'][0].path : null;

//         // Salva no banco (ajuste conforme sua lógica)
//         const perfil = await prisma.editarPerfil.create({
//             data: {
//                 email: user.email,
//                 nome: user.nome,
//                 descricao,
//                 imgUrl,
//                 curriculo
//             }
//         });

//         return res.status(201).json(perfil);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Erro ao salvar alterações" });
//     }
// });


// Publicar
router.get("/perfil", authenticate, async (req, res) => {
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

//publicação do perfil
router.get('/perfil', upload.fields([
    { name: 'anexar', maxCount: 1 },
]), authenticate, async (req, res) => {
    try {
        const { titulo, legenda } = req.body;

        let anexar = null;
        if (req.files && req.files['anexar'] && req.files['anexar'][0]) {
            anexar = req.files['anexar'][0].path;
        }
        const publicar = await prisma.publicar.create({
            data: {
                titulo,
                legenda,
                anexar
            }
        })

        return res.status(201).json(publicar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao salvar alterações" });
    }
});

// mudar senha
router.post("/configuracao/:id", authenticate, async (req, res) => {
    const { senha, novaSenha } = req.body;
    const { id } = req.params;

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    if (senha != user.senha) {
        return res.status(401).json({ error: "*Senha atual incorreta" })
    }

    // atualiza a senha do usuário na tabela User
    await prisma.user.update({
        where: { id: Number(id) },
        data: { senha: novaSenha }
    });

    return res.status(200).json({
        msg: "Senha atualizada com sucesso",
    })

})

module.exports = router