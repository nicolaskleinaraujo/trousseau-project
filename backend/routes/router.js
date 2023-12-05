// Importing the Router
const router = require('express').Router()

// Item Router
const itemRouter = require('./items')
router.use('/', itemRouter)

// Exporting Item Router
module.exports = router
