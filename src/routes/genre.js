const Router = require('express');
const { getGenres, createGenre, deleteGenre, updateGenre } = require('../controllers/genre');
const router = Router();

router.get('/genre', getGenres);

router.post('/genre',createGenre);

router.delete('/genre/:id',deleteGenre);

router.put('/genre/:id', updateGenre);


module.exports = router;