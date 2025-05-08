const { Router } = require('express')
const userController = require('../controller/userController')

const authenticate = require('../middleware/authMiddleware')

const router = Router()

// login
router.post("/", (req, res) => userController.login(req, res))

// CRUD -> Create, Read, Update, Delete
router.get("/user", authenticate, (req, res) => userController.findAll(req, res))

router.post("/user", authenticate, (req, res) => userController.create(req, res))

router.delete("/:id", authenticate, (req, res) => userController.delete(req, res))

router.put("/:id", authenticate, (req, res) => userController.update(req, res))

module.exports = router