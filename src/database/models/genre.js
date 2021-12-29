const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index')


function createGenreModel(connection) {
    const Genre = connection.define('Genre', {
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idmovies: {
            type: DataTypes.STRING,
            allowNull:true
        }
    }, {
        timestamps: false
    });
    return Genre;
};

module.exports = { 
    createGenreModel
};