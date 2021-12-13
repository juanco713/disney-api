const Sequelize = require('sequelize');
const { createCharacterModel } = require('./models/character');
const { createMovieModel } = require('./models/movies');
const { createGenreModel } = require('./models/genre');
const { createUserModel } = require('./models/User')

const models = {}; 

async function connectDB(host, username, password, database) {
    const connection = new Sequelize({
        host,
        username,
        password,
        database,
        dialect: 'mariadb'
    });

    models.Character = createCharacterModel(connection);
    models.Movie = createMovieModel(connection);
    models.Genre = createGenreModel(connection);
    models.User = createUserModel(connection);

    models.Genre.hasMany(models.Movie);
    models.Movie.belongsTo(models.Genre);

    models.Character.belongsToMany(models.Movie, { through: 'CharacterMovies' });
    models.Movie.belongsToMany(models.Character, { through: 'CharacterMovies' });

    try {
        await connection.authenticate();
        await connection.sync();
        console.log('Connection has been established successfully.');

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
function getModel(name) {
    return models[name];
  }

module.exports = {connectDB, getModel};