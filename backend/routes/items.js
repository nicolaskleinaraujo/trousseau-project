// Importing the router from express
const router = require('express').Router()

// Importing the controller
const itemController = require('../controllers/itemController')

// Create Item Function
router.route("/items").post((req, res) => itemController.create(req, res))

// Get all itens Funcion
router.route("/items").get((req, res) => itemController.getAll(req, res))

// Exporting the router
module.exports = router
