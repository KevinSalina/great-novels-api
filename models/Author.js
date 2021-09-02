const Sequelize = require('sequelize')
const db = require('../config/database')

const Author = db.define('author', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
}, { paranoid: true })


module.exports = Author


