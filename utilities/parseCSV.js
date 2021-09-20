/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const fs = require('fs')
const csv = require('fast-csv')
const models = require('../models')
const { model } = require('../config/database')

const path = process.cwd() + '/novels.csv'
const novels = []

fs.createReadStream(path)
  .pipe(csv.parse({ headers: ['title', 'author', 'genre'], renameHeaders: true }))
  .on('error', error => console.error(error))
  .on('data', row => novels.push(row))
  .on('end', async () => {
    let novelGenres = novels.map(({ author, ...rest }) => {
      rest.genre = rest.genre.split(',')

      return rest
    })

    let i = 1

    const titles = await models.Title.findAll()
    const genres = await models.Genre.findAll()

    const titleByName = titles.reduce((a, title) => {
      a[title.name] = title

      return a
    }, {})

    const genreByName = genres.reduce((a, genre) => {
      a[genre.name] = genre

      return a
    }, {})


    console.log(titleByName)


    for (const novel of novelGenres) {
      for (const genre of novel.genre) {
        // console.log(`INSERT INTO genres (titleId, genreId) VALUES (${i}, '${genre}')`)
        const titleId = titleByName[novel.title].id
        const genreId = genreByName[genre].id

        await models.TitleGenre.create({
          titleId,
          genreId
        })
      }

      i++
    }
  })
