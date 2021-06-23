const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/', async (req, res) => {
    console.log("im here");
    try {
        const items = await Item.find();
        // res.sendStatus(200);
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:name', async (req, res) => {
    console.log(req.params.name);
    try {
        const items = await Item.find({ itemName: new RegExp(req.params.name, 'i') });
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {

    const item = new Item({
        itemName: req.body.itemName,
        itemStock: req.body.itemStock,
        description: req.body.description,
    });
    
    // console.log(item);

    try{
        const newItem = await item.save();
        res.sendStatus(200);
        // res.status(200).json(newItem);
    }catch(error){
        res.status(400);
        console.log(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    console.log("im here2");
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
        res.json("success");
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    console.log(req.params);
    try {
        const item = await Item.findByIdAndRemove(req.params.id);
        res.json( "Deleted.");
    }catch(err) {
        res.status(500).json(err.message);
    }
}); 

module.exports = router;