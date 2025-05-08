const express = require('express')
const routes = require('./src/router/routes')
const { PrismaClient } = require('@prisma/client')

const app = express()

// Middleware para processar JSON
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
	console.log("Servidor rodando na porta", 3000)
})