const { getModel } = require('../database/index');
const jwt = require('jsonwebtoken');

async function userRegister(req, res) {
    const Register = getModel('Register');
    const { email, password } = req.body;
    if (email, password) {
        const newUser = await Register.build({
            email: req.body.email,
            password: req.body.password
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
    const Register = getModel('Register');
    const { email, password } = req.body;
    const userFound = await Register.findOne({
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

