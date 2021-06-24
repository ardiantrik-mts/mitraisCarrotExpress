const router = require('express').Router();

router.post('/register', async (req, res) => {

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