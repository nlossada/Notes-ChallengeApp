const { DataTypes } = require('sequelize');
// Import the built-in data types
// import { DataTypes } from '@sequelize/core';


module.exports = (sequelize) => {
    sequelize.define('note', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        archived: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }


    }, { timestamps: false });
};