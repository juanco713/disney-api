const Router = require('express');
const router = Router();
const { verifyToken, authAdmin } = require('../middlewares/authJwt')

const { getMovies, getOneMovie, createMovie, deleteMovie, updateMovie } = require("../controllers/movies");

router.get('/movies', verifyToken, getMovies);
router.get('/movies/:id',verifyToken, getOneMovie);
router.post('/movies', verifyToken, authAdmin, createMovie);
router.delete('/movies/:id', verifyToken, authAdmin, deleteMovie);
router.put('/movies/:id', verifyToken, authAdmin, updateMovie);



module.exports = router;