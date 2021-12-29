const Router = require('express');
const router = Router();
const {userRegister, userLogin} = require('../controllers/register')
const {getModel} = require('../database/index');


router.get('/users', async (req,res) => {
    const User = getModel('User');
    const Role = getModel('Role');
    const data = await User.findAll({
        include: Role
    });
    res.json(data);
})
router.post('/auth/login', userLogin);
router.post('/auth/register', userRegister);


module.exports = router;