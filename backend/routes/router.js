// Importing the Router
const router = require('express').Router()

// Items Router
const itemsRouter = require('./items')
router.use('/', itemsRouter)

// Exporting Item Router
module.exports = router
