const Word = require('../models/Word')

const getAllWords = async (req, res) => {
    const words = await Word.find({});
    res.status(200).json({words, count: words.length});
}

const createWord = async (req, res) => {
    const word = await Word.create(req.body);
    res.status(201).json({word})
}

const getWord = async (req, res) => {
    const {id: wordId} = req.params;
    const word = await Word.findOne({_id: wordId});
    if(!word) {
        res.status(404).json({msg: "Word not found"});
    }
    res.status(200).json({word})
}

module.exports = {
    getAllWords, createWord, getWord
}