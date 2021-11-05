const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();
const TaskCtrl = TaskController;
const { protect } = require('../middleware/auth');

router.route('/tasks').get(protect, TaskCtrl.apiGetTasks);

router.route('/tasks/new').post(TaskCtrl.apiPostTask);

router.route('/tasks/edit/:id').put(TaskCtrl.apiEditTask)

router.route('/tasks/:id').delete(TaskCtrl.apiDeleteTask);

router.route('/tasks/:id').get(TaskCtrl.apiFindTask);

module.exports = router