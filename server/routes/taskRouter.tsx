const express = require('express');
const Tasks = require('../models/Task.js');

const router = express.Router();

router.route('/').get( async (req, res) => {
  await Tasks.find({}, (err, result) => {
    if (err) {
      res.send(err)
    }
    res.send(result)
  })
});

router.route('/new').post( async (req, res) => {
  const taskText = req.body.tasks;
  const task = new Tasks({task: taskText})
  try {
    await task.save();
  } catch(err) {
    res.send(err)
  }
});


module.exports = router