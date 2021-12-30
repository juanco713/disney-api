const { getModel } = require('../database/index');
const jwt = require('jsonwebtoken');

async function userRegister(req, res) {
    try {
        const User = getModel('User');
        const { email, password } = req.body;
        if (email && password) {
            const newUser = await User.build({
                email: req.body.email,
                password: req.body.password
            });
            await newUser.save();
    
            const token = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, {
                expiresIn: 86400
            })
            res.json({ userToken: token }).status(200);
    
        } else {
            res.json('You must have complete all the fields!').status(400);
        }
    } catch (error) {
        console.error(error).status(500);
    }
};

async function userLogin(req, res) {
    try {
        const User = getModel('User');
        const { email, password } = req.body;
        const userFound = await User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        });
    
        if(userFound) {
            const token = jwt.sign({ id: userFound.id }, process.env.SECRET_TOKEN);
            res.json({ token }).status(200);
        } else {
            res.json('Email or password are wrong').status(404);
        }
    } catch (error) {
        console.error(error).status(500);
    }
};

module.exports = { userRegister, userLogin };

