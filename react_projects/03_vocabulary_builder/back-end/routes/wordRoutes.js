const express = require('express')
const router = express.Router();

// controllers
const {getWord, getAllWords, createWord} = require('../controllers/wordController')

router.get('/', getAllWords).post('/', createWord)

router.get('/:id', getWord)

module.exports = router