const mongoose = require('mongoose')

const WordSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Must provide word title'],
        trim: true
    },
    meaning: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Word', WordSchema)