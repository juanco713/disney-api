const Router = require('express');
const { verifyToken, authAdmin } = require('../middlewares/authJwt');
const { getGenres, createGenre, deleteGenre, updateGenre } = require('../controllers/genre');
const router = Router();

router.get('/genre', verifyToken, getGenres);

router.post('/genre',verifyToken, authAdmin, createGenre);

router.delete('/genre/:id',verifyToken, authAdmin, deleteGenre);

router.put('/genre/:id', verifyToken, authAdmin, updateGenre);


module.exports = router;