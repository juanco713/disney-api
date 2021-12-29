const jwt = require('jsonwebtoken');
const { getModel } = require('../database/index');


async function verifyToken(req, res, next) {
    try {
        const User = getModel('User');
        const token = req.headers.token;

        if (!token) return res.status(404).json({ message: 'Not user found' });

        const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
        console.log(decoded);
        req.userId = decoded.id;

        const user = await User.findByPk(req.userId);
        if (!user) return res.status(404).json('User not Found');

        next()

    } catch (err) {
        console.error(err)
    }
};


async function authAdmin(req, res, next) {
    const User = getModel('User');
    const role = await User.findOne({where: {
        id :req.userId}
    });


    if (role.RoleId === 1) {
        next();
    } else {
        return res.status(401).json('Not allowed');
    }
};



module.exports = { verifyToken, authAdmin };