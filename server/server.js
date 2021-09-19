const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
mongoose.connect('mongodb://localhost/codify')

app.get('/api', (req, res) => {
  res.json({"hello world": "hello from server"})
})

app.listen(3002)