const express = require('express')
const { PrismaClient } = require('@prisma/client')
const multer = require('multer');
const path = require('path');
const router = express.Router()
const prisma = new PrismaClient()
const jwt = require('jsonwebtoken');
const { authenticate } = require('../middleware/authMiddleware');
const bcrypt = require('bcrypt');

// Configuração do multer -> middleware para fazer upload de arquivos do cliente para o backend
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'anexar') {
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

    const saltRounds = 10; // nível de segurança
    const hashedPassword = await bcrypt.hash(senha, saltRounds);

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
            senha: hashedPassword
        }
    })

    const payload = {
        id: user.id,
        email: user.email,
        description: user.description
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
    const passwordMatch = await bcrypt.compare(senha, user.senha);


    if (!user || !passwordMatch) {
        return res.status(401).json({ error: "*E-mail ou senha incorretos" });
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


// mudar senha
router.post("/configuracao/:id", authenticate, async (req, res) => {
    const { senha, novaSenha } = req.body;
    const id = req.user.id;
    try {
        const user = await prisma.user.findUnique({ where: { id } });
        if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
        const passwordMatch = await bcrypt.compare(senha, user.senha);
        if (!passwordMatch) return res.status(401).json({ error: "*Senha atual incorreta" });
        const hashedNewPassword = await bcrypt.hash(novaSenha, 10);
        await prisma.user.update({
            where: { id },
            data: { senha: hashedNewPassword }
        });
        return res.status(200).json({ msg: "Senha atualizada com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar senha:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
});

//publicação do perfil
router.post('/publicar', upload.fields([
    { name: 'anexar', maxCount: 1 },
]), authenticate, async (req, res) => {
    try {
        const { legenda } = req.body;
        const userId = req.user.id;

        let anexar = null;
        if (req.files && req.files['anexar'] && req.files['anexar'][0]) {
            anexar = req.files['anexar'][0].path;
        }
        const publicar = await prisma.publicar.create({
            data: {
                legenda,
                anexar,
                userId: userId
            }
        })

        return res.status(201).json(publicar);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Erro ao salvar publicação" });
    }
});

// Rota para listar todas as publicações
router.get('/publicar', async (req, res) => {
    try {
        const publicar = await prisma.publicar.findMany({
            orderBy: {
                id: 'desc',
            },
        });

        res.status(200).json(publicar);
    } catch (error) {
        console.error('Erro ao buscar publicações:', error);
        res.status(500).json({ error: 'Erro ao buscar publicações' });
    }
});

// Rota para listar publicações de um usuário específico
router.get('/perfil/:id/publicar', authenticate, async (req, res) => {
    const { id } = req.params;
    const publicar = await prisma.publicar.findMany({
        where: { userId: Number(id) },
        orderBy: { id: 'desc' },
    });
    res.status(200).json(publicar);
});


// Rota para atualizar uma publicação
router.put('/perfil/:id', async (req, res) => {
    const { id } = req.params;
    const { legenda, anexar } = req.body;

    try {
        const publicacaoAtualizada = await prisma.publicar.update({
            where: {
                id: parseInt(id),
            },
            data: {
                legenda,
                anexar,
            },
        });

        res.status(200).json(publicacaoAtualizada);
    } catch (error) {
        console.error('Erro ao atualizar publicação:', error);
        res.status(500).json({ error: 'Erro ao atualizar publicação' });
    }
});

// ✅ Rota para deletar uma publicação
router.delete('/publicar/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.publicar.delete({
            where: {
                id: parseInt(id),
            },
        });

        res.status(204).send();
    } catch (error) {
        console.error('Erro ao deletar publicação:', error);
        res.status(500).json({ error: 'Erro ao deletar publicação' });
    }
});


// Editar perfil
router.get("/perfil/:id", authenticate, async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
    return res.status(200).json(user);
});


router.put("/perfil", authenticate, async (req, res) => {
    const { id, nome, description, email } = req.body

    const user = await prisma.user.findUnique({ where: { id: Number(id) } });

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }

    await prisma.user.update({
        where: { id: Number(id) },
        data: { nome, email, description }
    });

    return res.status(200).json(user)

})






// Rota para buscar todas as publicações
// router.put("/perfil", authenticate, async (req, res) => {
//     const { id, anexar, legenda } = req.body

//     const user = await prisma.user.findUnique({ where: { id: Number(id) } });

//     if (!user) {
//         return res.status(404).json({ error: "Usuário não encontrado" });
//     }

//     await prisma.user.update({
//         where: { id: Number(id) },
//         data: { anexar, legenda }
//     });

//     return res.status(200).json(user)

// })


module.exports = router