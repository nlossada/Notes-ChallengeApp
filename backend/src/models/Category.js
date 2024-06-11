const { DataTypes } = require('sequelize');
// Import the built-in data types
// import { DataTypes } from '@sequelize/core';


module.exports = (sequelize) => {
    sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 25]
            }
        },

    }, { timestamps: false });
};