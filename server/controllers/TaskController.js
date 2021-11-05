const Task = require('../models/Task.js');

TaskController = {
  apiGetTasks: async (req, res) => {
    const result = await Task.find({});
      try { 
        res.send(result)
      } catch(err) {
        console.log(err)
      }
  },

  apiPostTask: async (req, res) => {
    const taskText = req.body.task;
    const task = await new Task({task: taskText})
    try {
      await task.save();
      res.end();
    } catch(err) {
      console.log(err)
    }
  },

  apiDeleteTask: async (req, res) => {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    try {
      await deleteTask.delete();
      res.end();
    } catch(error) {
      console.log(error)
    }
  },

  apiEditTask: async (req, res) => {
      const editTask = await Task.findOneAndUpdate({_id: req.params.id}, {
        task: req.body.task
      });
      try {
        res.send(editTask);
      } catch(err) {
        console.log(err)
      }
  },

  apiFindTask: async (req, res) => {
    const task = await Task.findById(req.params.id);
    try {
      res.send(task);
    } catch(err) {
      console.log(err)
    }
  }
}

module.exports = TaskController;
