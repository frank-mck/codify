const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();
const Task = require('./models/Task');
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3002

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true
});

app.get('/api', async (req, res) => {
  const task = new Task({task: "Walk the dog"})
  try {
    await task.save();
  } catch(err) {
    console.log(err)
  }
})


app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})