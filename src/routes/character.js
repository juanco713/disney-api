const Router = require('express');
const router = Router();
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

router.get('/characters', getCharacters);

router.get('/characters/:id', getOneCharacter);

router.post('/character', createCharacter);

router.delete('/character/:id', deleteCharacter);

router.put('/character/:id', updateCharacter)





module.exports = router;