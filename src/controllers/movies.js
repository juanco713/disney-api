const { getModel } = require('../database/index')

async function getMovies(req,res) {
    try {
        const Movie = getModel('Movie');
        const data = await Movie.findAll({
            attributes: ['title', 'year'] 
        });
        res.json(data).status(200);
        
    } catch (error) {
        console.error(error).status(500);
    }
};

async function getOneMovie(req,res) {
    try {
        const Movie = getModel('Movie');
        const idMovie = req.params.id;
        const oneMovie = await Movie.findByPk(idMovie);
        res.json(oneMovie).status(200);
        
    } catch (error) {
        console.error(error).status(500);
    }
};

async function createMovie(req,res) {
    try {
        const Movie = getModel('Movie');
        const {title, year, calification} = req.body;
        if(title, year, calification) {
           const newMovie = await Movie.build({
                title : req.body.title,
                year : req.body.year,
                calification : req.body.calification
            });
            await newMovie.save();
            console.log(newMovie);
            res.json({movie: `New movie called ${title} has been added!`}).status(200)
        } else {
            res.json('You must have completed all the fields!').status(400);
        }
    } catch (error) {
        console.error(error).status(500);
    }
};

async function deleteMovie(req,res) {
    try {
        const Movie = getModel('Movie');
        const idMovie = req.params.id;
        const findMovie = await Movie.findByPk(idMovie);
        await findMovie.destroy();
        res.json(`The movie ${findMovie.title} has been deleted!`).status(200);
    } catch (error) {
        res.json({problem: 'We cant find the movie!'})
        console.error(error).status(404);
    }
};

async function updateMovie(req,res){
    try {
        const Movie = getModel('Movie');
        const idMovie = req.params.id;
        const findMovie = await Movie.findByPk(idMovie);
        const {title,year,calification} = req.body;
        if(title || year || calification) {
            const updateMovie = await findMovie.update({
                title: req.body.title,
                year: req.body.year,
                calification: req.body.calification
            });
            await updateMovie.save();
            res.json(`The movie ${findMovie.title} has been updated!`).status(200);
        } else {
            res.json('You have to complete at least one field!').status(400);
        };        
    } catch (error) {
        res.json('We cant find the movie!').status(404);
    };
}



module.exports = { getMovies, getOneMovie, createMovie, deleteMovie, updateMovie}