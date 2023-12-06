// Importing the model
const ItemModel = require('../models/Item')

const itemController = {

    create: async(req, res) => {
        try {
            const item = {
                name: req.body.name,
                place: req.body.place
            }
            
            const response = await ItemModel.create(item)
            res.status(201).json({ response, msg: "Item created sucessfully!" })
        } catch (error) {
            console.log(error)
        }
    },
}

// Exporting the 
module.exports = itemController
