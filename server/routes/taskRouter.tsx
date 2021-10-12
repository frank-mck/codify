const express = require('express');
const Task = require('../models/Task.js');

const router = express.Router();

router.route('/').get( async (req, res) => {
  await Task.find((err, result) => {
    if (err) {
      res.send()
    }
    res.send(result)
  })
});

router.route('/new').post( async (req, res) => {
  const taskText = req.body.tasks;
  const task = new Task({task: taskText})
  try {
    await task.save();
  } catch(err) {
    res.send(err)
  }
});

router.route('/:id').get((req, res) => {
  Task.findById(req.params.id, (err, task) => {
    res.json(task)
  })
})

router.route('/:id').delete( async (req, res) => {
  const deleteTask = await Task.findByIdAndDelete(req.params.id);
  try {
    deleteTask.delete();
  } catch(error) {
    console.log(error)
  }
})


module.exports = router