const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router();
const TaskCtrl = TaskController;
const { protect } = require('../middleware/auth');

router.route('/tasks').get(protect, TaskCtrl.apiGetTasks);

router.route('/tasks/new').post(protect, TaskCtrl.apiPostTask);

router.route('/tasks/edit/:id').put(protect, TaskCtrl.apiEditTask)

router.route('/tasks/delete/:id').delete(protect, TaskCtrl.apiDeleteTask);

router.route('/tasks/:id').get(TaskCtrl.apiFindTask);

module.exports = router