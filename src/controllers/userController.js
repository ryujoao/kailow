// const { PrismaClient } = require("@prisma/client")
// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcrypt")

// const prisma = new PrismaClient()

// const userController = {
//     // LOGIN
//     login: async (req, res) => {
//         const { email, senha } = req.body

//         if (!email || !senha) {
//             return res.status(400).json({ msg: "Campos inválidos" })
//         }

//         const userEncontrado = await prisma.user.findUnique({
//             where: { email }
//         })

//         if (!userEncontrado) {
//             return res.status(403).json({ msg: "Email ou senha incorretos" })
//         }

//         const isCerto = await bcrypt.compare(senha, userEncontrado.senha)

//         if (!isCerto) {
//             return res.status(401).json({ msg: "Email ou senha incorretos" })
//         }

//         const payload = {
//             id: userEncontrado.id,
//             email: userEncontrado.email
//         }

//         const token = jwt.sign(payload, "paodequeijo", { expiresIn: "1h" })

//         return res.status(200).json({
//             token,
//             msg: "Usuário autenticado com sucesso"
//         })
//     },

//     // CRIAR USUÁRIO
//     create: async (req, res) => {
//         try {
//             const { email, nome, senha, telefone, data } = req.body

//             if (!nome || !email || !senha) {
//                 return res.status(400).json({ msg: "Campos inválidos" })
//             }

//             const userExist = await prisma.user.findUnique({ where: { email } })
//             if (userExist) {
//                 return res.status(400).json({ msg: "E-mail já cadastrado" })
//             }

//             const hashedSenha = await bcrypt.hash(senha, 10)

//             const userCriado = await prisma.user.create({
//                 data: { nome, email, senha: hashedSenha, telefone, data }
//             })

//             return res.status(201).json({
//                 msg: "Usuário criado com sucesso",
//                 userCriado
//             })

//         } catch (error) {
//             console.log(error)
//             return res.status(500).json({ msg: "Erro ao criar o usuário" })
//         }
//     },

//     // LISTAR TODOS
//     findAll: async (req, res) => {
//         try {
//             const users = await prisma.user.findMany()
//             return res.status(200).json(users)
//         } catch (error) {
//             console.log(error)
//             return res.status(500).json({ msg: "Erro ao buscar os usuários" })
//         }
//     },

//     // ATUALIZAR
//     update: async (req, res) => {
//         try {
//             const { id } = req.params
//             const { email, nome, senha, telefone, data } = req.body

//             if (!email || !nome || !senha) {
//                 return res.status(400).json({ msg: "Campos faltando" })
//             }

//             const userExiste = await prisma.user.findUnique({ where: { id: Number(id) } })
//             if (!userExiste) {
//                 return res.status(404).json({ msg: "Usuário não encontrado" })
//             }

//             const hashedSenha = await bcrypt.hash(senha, 10)

//             const usuarioAtualizado = await prisma.user.update({
//                 where: { id: Number(id) },
//                 data: { email, nome, senha: hashedSenha, telefone, data }
//             })

//             return res.status(200).json({
//                 msg: "Usuário atualizado com sucesso",
//                 usuarioAtualizado
//             })

//         } catch (error) {
//             console.log(error)
//             return res.status(500).json({ msg: "Erro ao atualizar o usuário" })
//         }
//     },

//     // DELETAR
//     delete: async (req, res) => {
//         try {
//             const { id } = req.params

//             const user = await prisma.user.findUnique({ where: { id: Number(id) } })

//             if (!user) {
//                 return res.status(404).json({ msg: "Usuário não encontrado" })
//             }

//             await prisma.user.delete({ where: { id: Number(id) } })

//             return res.status(200).json({ msg: "Usuário deletado com sucesso!" })

//         } catch (error) {
//             console.log(error)
//             return res.status(500).json({ msg: "Erro ao deletar o usuário" })
//         }
//     }
// }

// module.exports = userController