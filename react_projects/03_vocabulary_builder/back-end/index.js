require('dotenv').config()
require('express-async-errors');
const express = require("express");
const app = express();

const cors = require('cors')

// DB
const connectDB = require("./db/connect");
const {wordRouter, phraseRouter} = require('./routes')


// middlewares
app.use(express.json())
app.use(cors())

// variables
const port = process.env.PORT || 5000;

// routes
app.get('/', (req, res)=>{
  res.send('Vocabulary Builder!');
})

app.use('/api/v1/words',wordRouter)

app.use('/api/v1/phrase', phraseRouter)


const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
