const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/create', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/update/:id_task', taskController.updateTask);
router.delete('/delete/:id_task', taskController.deleteTask);

module.exports = router;