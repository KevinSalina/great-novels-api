const express = require('express')
const router = express.Router()
const { getGenres, getGenresById } = require('../controllers/genreControllers')

router.get('/', getGenres)
router.get('/:id', getGenresById)

module.exports = router
