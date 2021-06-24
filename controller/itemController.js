const Item = require('../models/Item')
const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports.items_post = async (req, res) => {

        const item = new Item({
        itemName: req.body.itemName,
        itemStock: req.body.itemStock,
        description: req.body.description,
    });
    
    // console.log(item);
    try {
        const newItem = await item.save();
        // res.sendStatus(200);
        res.status(200).json(newItem);
        
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports.items_get = async (req, res) => {
    try {
        const items = await Item.find({})
        if(!items){
            return res.status(400)
        }
            res.status(200).send(items)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports.items_getName = async (req, res) => {
    try {
        const items = await Item.find({ itemName: new RegExp(req.params.name, 'i') })
        if(!items){
            return res.status(400).send()
        }
            res.status(200).send(items)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports.items_update = async (req, res) => {
    console.log(item);
    try {
        const item = await Item.findById(req.params.id);

        console.log(item);
        if (req.body.itemName) {
            item.itemName = req.body.itemName ;
        } 
        if (req.body.itemStock) {
            item.itemStock = req.body.itemStock ;
        }
        if (req.body.description) {
            // await Item.replaceOne( item._id , { description: req.body.description });
            item.description = req.body.description ;
        }
        
        console.log(item);
        await item.save();    
        res.status(200).json("Updated");
        // res.status(200).json(newItem);
        
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports.items_delete = async (req, res) => {
    console.log(req.params);
    try {
        const item = await Item.findByIdAndRemove(req.params.id);
        res.status(200).json( "Deleted.");
    }catch(err) {
        res.status(500).json(err.message);
    }
}
