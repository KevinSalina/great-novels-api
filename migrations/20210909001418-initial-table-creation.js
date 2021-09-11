'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('authors', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('titles', {
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
        reference: { model: 'authors', key: 'id' }
      },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE },
    })

    await queryInterface.createTable('genres', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE },
    })

    return queryInterface.createTable('titleGenres', {
      titleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: { model: 'titles', key: 'id' }
      },
      genreId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: { model: 'genres', key: 'id' }
      },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE },
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('titleGenres')
    await queryInterface.dropTable('genres')
    await queryInterface.dropTable('titles')

    return queryInterface.dropTable('authors')
  }
}
