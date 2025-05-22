const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes')
const { PrismaClient } = require('@prisma/client')

const app = express()
app.use(cors())
const prisma = new PrismaClient()

// Middleware para processar JSON
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
	console.log("Servidor rodando na porta", 3000)
})