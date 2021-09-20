const express = require('express')
const router = express.Router()
const { getAuthors, getAuthorsById } = require('../controllers/authorControllers')

router.get('/', getAuthors)
router.get('/:id', getAuthorsById)

module.exports = router
