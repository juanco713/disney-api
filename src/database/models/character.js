const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index')


function createCharacterModel(connection) {
    const Character = connection.define('Character', {
        img: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },              
        age: {
            type: DataTypes.STRING,
            allowNull : true
        },
        weigth: {
            type: DataTypes.STRING,
            allowNull: true
        },
        history: {
            type: DataTypes.STRING,
            allowNull: true
        },
        idmovie: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
        
    });
    return Character;
};

module.exports = { 
    createCharacterModel
};

