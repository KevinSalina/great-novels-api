const models = require('../models')

const getAuthors = async (req, res) => {
  const allAuthors = await models.Author.findAll()

  return allAuthors ? res.send(allAuthors) : res.status(404).send('Authors not found')
}

const getAuthorsById = async (req, res) => {
  const { id } = req.params

  const author = await models.Author.findOne({
    where: { id },
    include: [{
      model: models.Title,
      include: [{
        model: models.Genre
      }]
    }]
  })

  return author ? res.send(author) : res.status(404).send('Author not found')
}

module.exports = { getAuthors, getAuthorsById }
