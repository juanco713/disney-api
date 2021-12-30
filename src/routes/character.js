const Router = require('express');
const router = Router();
const {verifyToken, authAdmin} = require('../middlewares/authJwt')
const {
    createCharacter,
    deleteCharacter,
    getCharacters,
    updateCharacter,
    getOneCharacter
      } = require('../controllers/character')

router.get('/', (req, res) => {
    res.json('Disney Api')
});

router.get('/characters', verifyToken,getCharacters);

router.get('/characters/:id', verifyToken,getOneCharacter);

router.post('/character', verifyToken, authAdmin, createCharacter);

router.delete('/character/:id',verifyToken, authAdmin, deleteCharacter);

router.put('/character/:id', verifyToken, authAdmin, updateCharacter)





module.exports = router;