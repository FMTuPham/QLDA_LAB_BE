const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('QLDA', 'postgres', 'tucmgdtntg', {
  host: 'localhost',
  dialect: 'postgres' ,
  port: 5432,
});

module.exports = sequelize;
