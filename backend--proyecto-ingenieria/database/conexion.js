
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('proyecto', 'root', 'vader29', {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;