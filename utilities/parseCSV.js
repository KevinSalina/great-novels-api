/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const fs = require('fs')
const csv = require('fast-csv')
const models = require('../models')

const path = process.cwd() + '/novels.csv'
const novels = []

fs.createReadStream(path)
  .pipe(csv.parse({ headers: ['title', 'author', 'genre'], renameHeaders: true }))
  .on('error', error => console.error(error))
  .on('data', row => novels.push(row))
  .on('end', () => {
    let novelGenres = novels.map(({ author, ...rest }) => {
      rest.genre = rest.genre.split(',')

      return rest
    })

    let i = 1

    for (const novel of novelGenres) {
      for (const genre of novel.genre) {
        console.log(`INSERT INTO genres (titleId, genreId) VALUES (${i}, '${genre}')`)
      }

      i++
    }
  })
