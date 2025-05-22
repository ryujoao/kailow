const { Router } = require('express')
const userController = require('../controllers/userController')

// const authenticate = require('../middleware/authMiddleware')

const router = Router()

// login
router.post("/", (req, res) => userController.login(req, res))

// CRUD -> Create, Read, Update, Delete
router.get("/cadastro", authenticate, (req, res) => userController.findAll(req, res))

router.post("/cadastro", authenticate, (req, res) => userController.create(req, res))

router.delete("/:id", authenticate, (req, res) => userController.delete(req, res))

router.put("/:id", authenticate, (req, res) => userController.update(req, res))

module.exports = router