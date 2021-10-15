const express = require('express');
const Task = require('../models/Task.js');
const TaskController = require('../controllers/TaskController');
const router = express.Router();
const TaskCtrl = TaskController;

router.route('/tasks').get(TaskCtrl.apiGetTasks);

router.route('/tasks/new').post(TaskCtrl.apiPostTask);

router.route('/tasks/:id').get(TaskCtrl.apiFindTask);

router.route('/tasks/:id').delete(TaskCtrl.apiDeleteTask);

module.exports = router