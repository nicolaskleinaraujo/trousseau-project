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

    getAll: async (req, res) => {
        try {
            const items = await ItemModel.find()
            res.status(200).json(items)
        } catch (error) {
            console.log(error)
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id

            const item = await ItemModel.findById()
            if (!item) {
                res.status(404).json({msg: "Item not finded"})
                return
            }

            const deleteItem = await ItemModel.findByIdAndDelete(id)
            res.status(200).json({deleteItem, msg: "Item removed sucessfully"})
        } catch (error) {
            console.log(error)
        }
    }
}

// Exporting the 
module.exports = itemController
