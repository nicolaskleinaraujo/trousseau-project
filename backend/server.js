// Configuring the server
const express = require('express')
const app = express()
app.use(express.json)

// Importing the database connection function
const databaseConnection = require('./db/conn')
databaseConnection()

// Starting the server
app.listen(3000, () => {
    console.log('Server started on the port 3000')
})
