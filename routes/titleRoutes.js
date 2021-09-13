const express = require('express')
const router = express.Router()
const { getTitles, getTitlesById } = require('../controllers/titleControllers')

router.get('/', getTitles)
router.get('/:id', getTitlesById)

module.exports = router
