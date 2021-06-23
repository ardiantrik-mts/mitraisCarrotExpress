const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    console.log("im here");
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:name', async (req, res) => {
    console.log(req.params.name);
    try {
        const users = await User.find({ name: new RegExp(req.params.name, 'i') });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {

    const hashedPass = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        password: hashedPass,
        name: req.body.name,
        dob: new Date(req.body.dob),
        role_id: req.body.role_id
    });
    
    // console.log(item);

    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(400);
        console.log(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    console.log("im here2");
    try {
        const user = await User.findById(req.params.id);

        console.log(user);
        if (req.body.username) {
            user.username = req.body.username;
        } 
        if (req.body.name) {
            user.name = req.body.name;
        }
        if (req.body.password) {
            const hashedPass = await bcrypt.hash(req.body.password, 10);
            user.password = hashedPass;
        }
        if (req.body.role_id) {
            user.role_id = req.body.role_id;
        }
        if (req.body.dob) {
            user.dob = req.body.dob;
        }
        
        console.log(user);
        await user.save();    
        res.json("success");
    } catch (err) {
        res.status(500).json(err.message);
    }
});


router.delete('/:id', async (req, res) => {
    console.log(req.params);
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (user === null) {
            return res.json("Not Found.");
        }
        return res.json("Deleted.");
    }catch(err) {
        res.status(500).json(err.message);
    }
}); 

module.exports = router;