const Phrase = require("../models/Phrase");

const createPhrase = async (req, res) => {
  console.log(req.body);
  const phrase = await Phrase.create(req.body);
  res.status(201).json({ phrase });
};

const getAllPhrase = async (req, res) => {
  const phrases = await Phrase.find({});

  res.send({ phrases, count: phrases.length });
};

module.exports = { createPhrase, getAllPhrase };
