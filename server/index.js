const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const tasks = require('./routes/tasksRouter.js');
require('dotenv').config();

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())

app.use('/api/v1', tasks);

app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})