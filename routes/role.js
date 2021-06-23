const express = require('express');
const router = express.Router();
const Role = require('../models/role');

router.get('/', async (req, res) => {
    console.log("im here");
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {

    const role = new Role({
        title: req.body.title,
        role_name: req.body.role_name,
    });
    
    // console.log(item);

    try{
        const newRole = await role.save();
        res.status(201).json(newRole);
    }catch(error){
        res.status(400);
        console.log(error.message);
    }
});

module.exports = router;