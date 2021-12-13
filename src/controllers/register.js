const { getModel } = require('../database/index');
const jwt = require('jsonwebtoken');

async function userRegister(req, res) {
    const User = getModel('User');
    const { email, password } = req.body;
    if (email && password || admin) {
        const newUser = await User.build({
            email: req.body.email,
            password: req.body.password,
            admin: req.body.admin
        });
        await newUser.save();

        const token = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, {
            expiresIn: 86400
        })
        res.json({ userToken: token }).status(200);

    } else {
        res.json('You must have complete all the fields!')
    }
};

async function userLogin(req, res) {
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
};

module.exports = { userRegister, userLogin };

