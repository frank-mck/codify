const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();
const Task = require('./models/Task');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.post('/api/v1/tasks/new', async (req, res) => {
  const taskText = req.body.tasks;
  const task = new Task({task: taskText})
  try {
    await task.save();
  } catch(err) {
    res.send(err)
  }
})

app.get('/api/v1/tasks', async (req, res) => {
  await Task.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})


app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})