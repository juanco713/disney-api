const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../index')


function createUserModel(connection) {
    const User = connection.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
};

module.exports = { 
    createUserModel
};