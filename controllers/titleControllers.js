const models = require('../models')

const getTitles = async (req, res) => {
  const allTitles = await models.Title.findAll({
    include: [
      {
        model: models.Author
      },
      {
        model: models.Genre
      }
    ]
  })

  return allTitles ? res.send(allTitles) : res.status(404).send('Titles not found')
}

const getTitlesById = async (req, res) => {
  const { id } = req.params

  const title = await models.Title.findOne({
    where: { id },
    include: [
      {
        model: models.Author
      },
      {
        model: models.Genre
      }
    ]
  })

  return title ? res.send(title) : res.status(404).send('Title not found')
}

module.exports = { getTitles, getTitlesById }
