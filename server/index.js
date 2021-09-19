const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();
const Task = require('./models/Task');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true
});

app.post('/v2/api/tasks', async (req, res) => {
  const taskText = req.body.tasks;
  const task = new Task({task: taskText})
  try {
    await task.save();
  } catch(err) {
    console.log(err)
  }
})

app.get('/tasks', async (req, res) => {
  const data = await Task.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
})


app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})