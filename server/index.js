const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const tasks = require('./routes/tasksRouter.js');
const auth = require('./routes/auth')
require('dotenv').config();

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: false }));

// This will allow us to get data from the body
app.use(express.json());

app.use(cors())

app.use('/api/v1', tasks);

app.use('/api/auth', auth)

app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})