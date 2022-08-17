const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../db');

const Cheese = db.define('Cheese', {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = { Cheese }