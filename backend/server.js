// Configuring the server
const express = require('express')
const app = express()
app.use(express.json)

// Importing and conecting to the database
const dbConnection = require('./db/conn')
dbConnection()

// Routes configuration
const routes = require('./routes/router')
app.use('/api', routes)

// Starting the server
app.listen(3000, () => {
    console.log('Server started on the port 3000')
})
