// Geting the .env file informations
require('dotenv').config()

// Importing mongoose
const mongoose = require('mongoose')

// Configuring the function that connects to the database
async function dbConnection() {
    mongoose.connect(process.env.DATABASE_URL)
    const db = mongoose.connection
    db.on('error', (error) => console.log(error))
    db.once('open', () => console.log('Connected to the database'))
}

// Exporting the database
module.exports = dbConnection