const Task = require('../models/Task.js');
const User = require('../models/User.js');
const ErrorResponse = require('../utils/errorResponse');

TaskController = {
  user: {},

  apiGetTasks: async (req, res, next) => {
    const user = await User.findOne(req.user);
    TaskController.user = user
    const result = await Task.find({
       user: user._id })
       .populate('user')
       .sort({ createdAt: "desc" });
      try { 
        res.send(result);
      } catch(err) {
        console.log(err)
      }
  },

  apiPostTask: async (req, res) => {
    const taskText = req.body.task;
    const user = await User.findOne(TaskController.user);
    const task = await new Task({task: taskText, user: user._id }).populate('user');
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
