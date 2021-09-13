const models = require('../models')

const getGenres = async (req, res) => {
  const allGenres = await models.Genre.findAll()

  return allGenres ? res.send(allGenres) : res.status(404).send('Genres not found')
}

const getGenresById = async (req, res) => {
  const { id } = req.params

  const genre = await models.Genre.findOne({
    where: { id },
    include: [{
      model: models.Title,
      include: [{
        model: models.Author
      }]
    }]
  })

  return genre ? res.send(genre) : res.status(404).send('Genre not found')
}

module.exports = { getGenres, getGenresById }
