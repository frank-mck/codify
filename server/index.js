const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();
const app = express();
const cors = require('cors');
const tasks = require('./routes/taskRouter.tsx');

const PORT = process.env.PORT || 3002

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors())

app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})