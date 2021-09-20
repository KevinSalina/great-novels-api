const Sequelize = require('sequelize')
const db = require('../config/database')
const Genre = require('./Genre')
const Title = require('./Title')

const TitleGenre = db.define('titleGenre', {
  titleId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    reference: { model: Title, key: 'id' }
  },
  genreId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    reference: { model: Genre, key: 'id' }
  }
}, { paranoid: true })


module.exports = TitleGenre
