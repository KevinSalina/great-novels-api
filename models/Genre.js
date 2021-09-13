const Sequelize = require('sequelize')
const db = require('../config/database')

const Genre = db.define('genre', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
}, { paranoid: true })


module.exports = Genre
