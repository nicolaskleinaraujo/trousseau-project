// Importing mongoose
const mongoose = require('mongoose')

// Creating the schema function
const { Schema } = mongoose

// Creating the model
const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    check: {
        type: String,
        required: true,
    }
})

// Exporting the model
const Item = mongoose.model('Item', itemSchema)
module.exports = Item
