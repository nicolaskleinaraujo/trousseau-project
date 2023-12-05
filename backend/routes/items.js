const router = require('express').Router()

const itemController = require('../controllers/itemController')

// Functions
router.route("/items").post((req, res) => itemController.create(req, res))

// Exporting the router
module.exports = router
