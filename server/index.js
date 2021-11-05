require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const tasksRouter = require('./routes/tasksRouter.js');
const authRouter = require('./routes/authRouter.js');
const errorHandler = require('./middleware/error')

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true, useUnifiedTopology: true
});

app.use(express.urlencoded({ extended: false }));

// This will allow us to get data from the body
app.use(express.json());

app.use(cors());

app.use('/api/v1/auth', authRouter);

app.use('/api/v1', tasksRouter);

// Error handler should be last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3002;

const server = app.listen(PORT, () => {
  console.log(`listening on server ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1))
})