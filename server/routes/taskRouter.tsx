const express = require('express');
const Task = require('../models/Task.js');

const router = express.Router();

router.route('/').get(async (req, res) => {
  await Task.find({}, (err, result) => {
    try { 
      res.send(result)
    } catch {
      res.send(err)
    }
  }).clone().catch(function(err){ console.log(err)})
});

router.route('/new').post( async (req, res) => {
  const taskText = req.body.tasks;
  const task = new Task({task: taskText})
  try {
    await task.save();
    res.end();
  } catch(err) {
    res.send(err)
  }
});

router.route('/:id').get((req, res) => {
  Task.findById(req.params.id, (err, task) => {
    res.send(task)
  })
})

router.route('/:id').delete(async (req, res) => {
  const deleteTask = await Task.findByIdAndDelete(req.params.id);
  try {
    deleteTask.delete();
    res.end();
  } catch(error) {
    console.log(error)
  }
})


module.exports = router