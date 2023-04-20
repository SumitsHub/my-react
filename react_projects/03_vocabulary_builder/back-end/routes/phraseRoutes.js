const express = require('express')
const router = express.Router();

const {getAllPhrase, createPhrase} = require('../controllers/phraseController')

router.get('/', getAllPhrase).post('/', createPhrase)

module.exports = router