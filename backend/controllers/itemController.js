// Importing the model
const ItemModel = require('../models/Item')

// Creating the "CRUD" functions
const itemController = {
    create: async(req, res) => {
        try {
            const item = {
                name: req.body.name,
                place: req.body.place,
                check: "false"
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

            const item = await ItemModel.findById(id)

            if (!item) {
                res.status(404).json({ msg: "Item not finded!" })
                return
            }

            const deleteItem = await ItemModel.findByIdAndDelete(id)
            res.status(200).json({ deleteItem, msg: "Item removed sucessfully!" })
        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id

            const item = {
                name: req.body.name,
                place: req.body.place,
                check: req.body.check
            }

            const updatedItem = await ItemModel.findByIdAndUpdate(id, item)

            if (!updatedItem) {
                res.status(404).json({ msg: "Item not finded!" })
            }

            res.status(200).json({ item, msg: "Item updated sucessfully!" })
        } catch (error) {
            console.log(error)
        }
    }
}

// Exporting all functions
module.exports = itemController
