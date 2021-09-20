const { Sequelize } = require('sequelize')


module.exports = new Sequelize('novels', 'reader', 'ILoveBooks1!', {
  host: 'localhost',
  dialect: 'mysql'
})


