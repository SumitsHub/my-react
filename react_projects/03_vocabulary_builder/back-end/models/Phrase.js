const mongoose = require("mongoose");

const PhraseSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, "Please provided phrase name"],
    minlength: 5,
    unique: true,
  },
});

module.exports = mongoose.model("Phrase", PhraseSchema);
