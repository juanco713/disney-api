const Router = require('express');
const router = Router();
const {userRegister, userLogin} = require('../controllers/register')

router.post('/auth/login', userLogin);
router.post('/auth/register', userRegister);


module.exports = router;