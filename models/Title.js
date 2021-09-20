const Sequelize = require('sequelize')
const db = require('../config/database')
const Author = require('./Author')

const Title = db.define('title', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  authorId: {
    type: Sequelize.INTEGER,
    reference: { model: Author, key: 'id' }
  }
}, { paranoid: true })


module.exports = Title
