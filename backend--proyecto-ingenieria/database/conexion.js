
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('db_ingenieria', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;