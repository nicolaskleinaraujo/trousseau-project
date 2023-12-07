// Importing the router from express
const router = require('express').Router()

// Importing the controller
const itemController = require('../controllers/itemController')

// Create Item Function
router.route("/items").post((req, res) => itemController.create(req, res))

// Get all itens Funcion
router.route("/items").get((req, res) => itemController.getAll(req, res))

// Remove item by id function
router.route("/items/:id").delete((req, res) => itemController.delete(req, res)) 

// Exporting the router
module.exports = router
