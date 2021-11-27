const {getModel} = require('../database/index')

async function getGenres(req, res) {
    try {
        const Genre = getModel('Genre');
        const data = await Genre.findAll({
            attributes: ['name','idmovie']
        });
        res.json(data).status(200);
    } catch (error) {
        console.error(error).status(500)
    }
};

async function createGenre(req, res) {
    try {
        const Genre = getModel('Genre');
        const { img,name, idmovies } = req.body;
        if (img,name, idmovies) {
            const newGenre = await Genre.build({
                img: req.body.img,
                name: req.body.name,
                idmovies: req.body.idmovies
            });
            await newGenre.save();
            res.json({ Genre: `${name} has been added as a new genre!` }).status(201);
        } else {
            res.json('You must have completed all the fields!')
        }
    } catch (error) {
        console.error(error)
    }
};

async function updateGenre(req, res) {
    try {
        const Genre = getModel('Genre');
        const idGenre = req.params.id;
        const genreFound = await Genre.findByPk(idGenre);
        const { img, name, idmovies} = req.body;
        if (img || name || idmovies) {
            const updateCharacter = await genreFound.update({
                img: req.body.img,
                name: req.body.name,
                idmovies: req.body.idmovies
            });
            await updateCharacter.save();
            res.json('Genre updated!').status(200);
        } else {
            res.json('You have to complete at least one field!');
        };
    } catch (error) {
        console.error(error).status(500)
    }
};

async function deleteGenre(req, res) {
    try {
        const idGenre = Number(req.params.id)
        const Genre = await getModel('Genre');
        const data = await Genre.findByPk(idGenre);
        await data.destroy();
        res.send(`Genre deleted`).status(200);
    } catch (error) {
        console.error(error)
    }
};

module.exports = { getGenres, createGenre, deleteGenre, updateGenre };