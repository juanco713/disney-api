const Router = require('express');
const router = Router();

const { getMovies, getOneMovie, createMovie, deleteMovie, updateMovie } = require("../controllers/movies");

router.get('/movies', getMovies);
router.get('/movies/:id', getOneMovie);
router.post('/movies', createMovie);
router.delete('/movies/:id', deleteMovie);
router.put('/movies/:id', updateMovie);



module.exports = router;