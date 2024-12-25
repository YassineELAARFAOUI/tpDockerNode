const {DataTypes} = require('sequelize');
const sequelize = require('../services/db'); // Path to your database configuration

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,  // This field is required
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,  // This field is required
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,  // This field is required
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,  // This field is required
  },
}, {
  timestamps: true,  // Optional: Add timestamps to the model
  tableName: 'book',
});

module.exports = Book;