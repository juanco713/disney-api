const { getModel } = require('../database/index')


async function getCharacters(req, res) {
    try {
        const Character = getModel('Character');
        const data = await Character.findAll({
            attributes: ['name']
        });
        res.json(data).status(200);
    } catch (error) {
        console.error(error).status(500)
    }
};



async function getOneCharacter(req, res) {
    try {
        const Character = getModel('Character');
        const idCharacter = req.params.id;
        const oneCharacter = await Character.findByPk(idCharacter);
        const { name, age, idMovie } = req.query;
        if (name) {
            res.json(oneCharacter.name).status(200)
        } else if (age) {
            res.json(oneCharacter.age).status(200);
        } else if (idMovie) {
            res.json(oneCharacter.idmovie).status(200);
        } else {
            res.json(oneCharacter).status(200);
        };

    } catch (error) {
        console.error(error).status(404);
    }
};

async function createCharacter(req, res) {
    try {
        const Character = getModel('Character')
        const { name, age, weigth, history } = req.body;
        if (name, age, weigth, history) {
            const newCharacter = await Character.build({
                name: req.body.name,
                age: req.body.age,
                weigth: req.body.weigth,
                history: req.body.history
            });
            await newCharacter.save();
            res.json({ character: `${name} has been added as a new character!` }).status(201);
        } else {
            res.json('You must have completed all the fields!')
        }
    } catch (error) {
        console.error(error)
    }
};

async function updateCharacter(req, res) {
    try {
        const Character = getModel('Character');
        const idCharacter = req.params.id;
        const dataCharacter = await Character.findByPk(idCharacter);
        const { name, age, weigth, history } = req.body;
        if (name || age || weigth || history) {
            const updateCharacter = await dataCharacter.update({
                name: req.body.name,
                age: req.body.age,
                weigth: req.body.weigth,
                history: req.body.history
            });
            await updateCharacter.save();
            res.json('Character updated!').status(200);
        } else {
            res.json('You have to complete at least one field!');
        };
    } catch (error) {
        console.error(error).status(500)
    }
};

async function deleteCharacter(req, res) {
    try {
        const idCharacter = Number(req.params.id)
        const Character = await getModel('Character');
        const data = await Character.findByPk(idCharacter);
        await data.destroy();
        res.send(`Character deleted`).status(200);
    } catch (error) {
        console.error(error)
    }
};


module.exports = {
    createCharacter,
    deleteCharacter,
    getCharacters,
    updateCharacter,
    getOneCharacter
}
