const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index')


function createMovieModel(connection) {
    const Movie = connection.define('Movie', {
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },              
        year: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        calification: {
            type: DataTypes.STRING,
            allowNull: true
        },
        idcharacters: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });
    return Movie;
};

module.exports = { 
    createMovieModel
};
